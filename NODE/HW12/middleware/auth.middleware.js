const jwt = require('jsonwebtoken');

const {
    roleConfig
} = require('../config');
const { statusCodeEnum: statusCode, constant } = require('../constant');
const { ErrorHandler } = require('../helper');
const { errorMessage } = require('../message');
const { authService, userService } = require('../service');
const { authValidators } = require('../validator');

module.exports = {
    isAuthDataValid: async (req, res, next) => {
        try {
            const { preferL = 'en' } = req.query;

            const { error } = await authValidators.authDataValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(statusCode.BAD_REQUEST,
                    errorMessage.JOI_VALIDATION_ERROR.customCode,
                    errorMessage.JOI_VALIDATION_ERROR[preferL]);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isAuthUserExist: async (req, res, next) => {
        try {
            const { body: { email }, query: { preferL = 'en' } } = req;

            const user = await userService.findOneUser({ email }, 'getAll');

            if (!user) {
                throw new ErrorHandler(statusCode.NOT_FOUND,
                    errorMessage.NO_RESULT_FOUND.customCode,
                    errorMessage.NO_RESULT_FOUND[preferL]);
            }

            req.user = user;

            next();
        } catch (e) {
            next(e);
        }
    },

    checkAccessToken: async (req, res, next) => {
        try {
            const { preferL = 'en' } = req.query;
            const access_token = req.get(constant.AUTHORIZATION);

            if (!access_token) {
                throw new ErrorHandler(statusCode.BAD_REQUEST,
                    errorMessage.ABSENT_ACCESS_TOKEN.customCode,
                    errorMessage.ABSENT_ACCESS_TOKEN[preferL]);
            }

            const tokens = await authService.findToken({ access_token });

            if (!tokens) {
                throw new ErrorHandler(statusCode.FORBIDDEN,
                    errorMessage.SUSPICIOUS_TOKEN.customCode,
                    errorMessage.SUSPICIOUS_TOKEN[preferL]);
            }

            const user = await userService.findUserById(tokens.userId);

            jwt.verify(access_token, roleConfig[user.role].access_word, (err) => {
                if (err) {
                    throw new ErrorHandler(statusCode.UNAUTHORIZED,
                        errorMessage.ACCESS_TOKEN_NOT_VALID.customCode,
                        errorMessage.ACCESS_TOKEN_NOT_VALID[preferL]);
                }
            });

            req.user = user;

            next();
        } catch (e) {
            next(e);
        }
    },

    checkRefreshToken: async (req, res, next) => {
        try {
            const { preferL = 'en' } = req.query;
            const refresh_token = req.get(constant.AUTHORIZATION);

            if (!refresh_token) {
                throw new ErrorHandler(statusCode.BAD_REQUEST,
                    errorMessage.ABSENT_ACCESS_TOKEN.customCode,
                    errorMessage.ABSENT_ACCESS_TOKEN[preferL]);
            }

            const tokens = await authService.findToken({ refresh_token });

            if (!tokens) {
                throw new ErrorHandler(statusCode.FORBIDDEN,
                    errorMessage.SUSPICIOUS_TOKEN.customCode,
                    errorMessage.SUSPICIOUS_TOKEN[preferL]);
            }

            const { role } = await userService.findUserById(tokens.userId);

            jwt.verify(refresh_token, roleConfig[role].refresh_word, (err) => {
                if (err) {
                    throw new ErrorHandler(statusCode.UNAUTHORIZED,
                        errorMessage.ACCESS_TOKEN_NOT_VALID.customCode,
                        errorMessage.ACCESS_TOKEN_NOT_VALID[preferL]);
                }
            });

            req.role = role;
            req.oldTokens = tokens;

            next();
        } catch (e) {
            next(e);
        }
    },
};
