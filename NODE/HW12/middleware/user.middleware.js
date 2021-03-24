const { statusCodeEnum: statusCode } = require('../constant');
const { ErrorHandler } = require('../helper');
const { errorMessage } = require('../message');
const { userService } = require('../service');
const { userValidators } = require('../validator');

module.exports = {
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
            const { body: { email }, query: { preferL = 'en' } } = req;

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

    accessRightsCheck: (roles = []) => (req, res, next) => {
        try {
            const { query: { preferL = 'en' }, user: { role } } = req;

            if (!roles.length) {
                throw new ErrorHandler(statusCode.BAD_REQUEST,
                    errorMessage.BAD_REQUEST.customCode,
                    'There is no chosen role for check!');
            }

            if (!roles.includes(role)) {
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
