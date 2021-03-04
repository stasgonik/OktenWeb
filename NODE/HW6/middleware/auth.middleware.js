const jwt = require('jsonwebtoken');

const { statusCodeEnum: statusCode } = require('../constant');
const { errorMessage } = require('../message');
const { Token, User } = require('../model');
const { authValidators } = require('../validator');
const { JWT_SECRET, JWT_REFRESH } = require('../config/config');
const { constant } = require('../constant');

module.exports = {
    isAuthDataValid: async (req, res, next) => {
        try {
            const { error } = await authValidators.authDataValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    isAuthUserExist: async (req, res, next) => {
        try {
            const { email } = req.body;
            const { preferL = 'en' } = req.query;

            const user = await User.findOne({ email });

            if (!user) {
                throw new Error(errorMessage.NO_RESULT_FOUND[preferL]);
            }

            req.user = user;

            next();
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    checkAccessToken: async (req, res, next) => {
        try {
            const { preferL = 'en' } = req.query;
            const access_token = req.get(constant.AUTHORIZATION);

            if (!access_token) {
                throw new Error(errorMessage.ABSENT_ACCESS_TOKEN[preferL]);
            }

            jwt.verify(access_token, JWT_SECRET, (err) => {
                if (err) {
                    throw new Error(errorMessage.ACCESS_TOKEN_NOT_VALID[preferL]);
                }
            });

            const tokens = await Token.findOne({ access_token }).populate('_user_id');

            if (!tokens) {
                throw new Error(errorMessage.SUSPICIOUS_TOKEN[preferL]);
            }

            req.user = tokens._user_id;

            next();
        } catch (e) {
            res.json(e.message);
        }
    },

    checkRefreshToken: async (req, res, next) => {
        try {
            const { preferL = 'en' } = req.query;
            const refresh_token = req.get(constant.REFRESH_TOKEN);

            if (!refresh_token) {
                throw new Error(errorMessage.ABSENT_REFRESH_TOKEN[preferL]);
            }

            jwt.verify(refresh_token, JWT_REFRESH, (err) => {
                if (err) {
                    throw new Error(errorMessage.REFRESH_TOKEN_NOT_VALID[preferL]);
                }
            });

            const tokens = await Token.findOne({ refresh_token });

            if (!tokens) {
                throw new Error(errorMessage.SUSPICIOUS_TOKEN[preferL]);
            }

            req.oldTokens = tokens;

            next();
        } catch (e) {
            res.json(e.message);
        }
    },
};
