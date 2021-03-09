const { statusCodeEnum: statusCode } = require('../constant');
const { ErrorHandler } = require('../helper');
const { errorMessage } = require('../message');
const { houseService } = require('../service');
const { utilValidators, houseValidators } = require('../validator');

module.exports = {
    isIdValid: async (req, res, next) => {
        try {
            const { houseId } = req.params;

            const { error } = await utilValidators.idMongooseValidator.validate(houseId);

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

    isHouseValid: async (req, res, next) => {
        try {
            const { error } = await houseValidators.createHouseValidator.validate(req.body);

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
                next();
            }

            const { error } = await houseValidators.findHouseValidator.validate(filter);

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

    isHouseExist: async (req, res, next) => {
        try {
            const { houseId } = req.params;
            const { preferL = 'en' } = req.query;

            const house = await houseService.findHouseById(houseId);

            if (!house) {
                throw new ErrorHandler(statusCode.NOT_FOUND,
                    errorMessage.NO_RESULT_FOUND.customCode,
                    errorMessage.NO_RESULT_FOUND[preferL]);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
