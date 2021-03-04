const { userService } = require('../service');
const { statusCodeEnum: statusCode } = require('../constant');
const { errorMessage } = require('../message');
const { utilValidators, userValidators } = require('../validator');
const { User } = require('../model');

module.exports = {
    isIdValid: async (req, res, next) => {
        try {
            const { userId } = req.params;

            const { error } = await utilValidators.idMongooseValidator.validate(userId);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    isUserValid: async (req, res, next) => {
        try {
            const { error } = await userValidators.createUserValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    isSearchQueryValid: async (req, res, next) => {
        try {
            const filter = req.query;

            delete filter.preferL;

            if (!filter) {
                next();
            }

            const { error } = await userValidators.findUserValidator.validate(filter);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    isUserSearchResultExist: async (req, res, next) => {
        try {
            const { preferL = 'en' } = req.query;
            const filter = req.query;

            delete filter.preferL;

            const users = await userService.findUsers(filter, preferL);

            if (filter && !users.length) {
                throw new Error(errorMessage.NO_RESULT_FOUND[preferL]);
            }

            next();
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    isUserExist: async (req, res, next) => {
        try {
            const { userId } = req.params;
            const { preferL = 'en' } = req.query;

            const user = await userService.findUserById(userId);

            if (!user) {
                throw new Error(errorMessage.NO_RESULT_FOUND[preferL]);
            }

            next();
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    isUserAlreadyExist: async (req, res, next) => {
        try {
            const { email } = req.body;
            const { preferL = 'en' } = req.query;

            const user = await User.findOne({ email });

            if (user) {
                throw new Error(errorMessage.USER_ALREADY_EXIST[preferL]);
            }

            next();
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    accessRightsCheck: (req, res, next) => {
        try {
            const { userId } = req.params;
            const { preferL = 'en' } = req.query;
            const { user } = req;

            console.log(user);

            console.log(userId);

            if (userId !== user.id) {
                throw new Error(errorMessage.UNAUTHORISED_ACCESS[preferL]);
            }

            next();
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },
};
