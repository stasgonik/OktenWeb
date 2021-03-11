const { statusCodeEnum: statusCode } = require('../constant');
const { ErrorHandler } = require('../helper');
const { errorMessage } = require('../message');
const { userService } = require('../service');
const { utilValidators, userValidators } = require('../validator');

module.exports = {
    isIdValid: async (req, res, next) => {
        try {
            const { userId } = req.params;

            const { error } = await utilValidators.idMongooseValidator.validate(userId);

            if (error) {
                throw new ErrorHandler(statusCode.BAD_REQUEST,
                    errorMessage.JOI_VALIDATION_ERROR.customCode,
                    error.details[0].message);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isUserValid: async (req, res, next) => {
        try {
            const { error } = await userValidators.createUserValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(statusCode.BAD_REQUEST,
                    errorMessage.JOI_VALIDATION_ERROR.customCode,
                    error.details[0].message);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isSearchQueryValid: async (req, res, next) => {
        try {
            const filter = req.query;

            delete filter.preferL;

            if (!filter) {
                return next();
            }

            const { error } = await userValidators.findUserValidator.validate(filter);

            if (error) {
                throw new ErrorHandler(statusCode.BAD_REQUEST,
                    errorMessage.JOI_VALIDATION_ERROR.customCode,
                    error.details[0].message);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isUserAlreadyExist: async (req, res, next) => {
        try {
            const { email } = req.body;
            const { preferL = 'en' } = req.query;

            const user = await userService.findOneUser({ email });

            if (user) {
                throw new ErrorHandler(statusCode.BAD_REQUEST,
                    errorMessage.USER_ALREADY_EXIST.customCode,
                    errorMessage.USER_ALREADY_EXIST[preferL]);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    accessRightsCheck: (req, res, next) => {
        try {
            const { userId } = req.params;
            const { preferL = 'en' } = req.query;
            const { user } = req;

            if (userId !== user.id) {
                throw new ErrorHandler(statusCode.UNAUTHORIZED,
                    errorMessage.UNAUTHORISED_ACCESS.customCode,
                    errorMessage.UNAUTHORISED_ACCESS[preferL]);
            }

            next();
        } catch (e) {
            next(e);
        }
    },
};
