const { statusCodeEnum: statusCode } = require('../constant');
const { ErrorHandler } = require('../helper');
const { errorMessage } = require('../message');
const { addressService } = require('../service');
const { utilValidators, addressValidators } = require('../validator');

module.exports = {
    isIdValid: async (req, res, next) => {
        try {
            const { addressId } = req.params;

            const { error } = await utilValidators.idMongooseValidator.validate(addressId);

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

    isAddressValid: async (req, res, next) => {
        try {
            const { error } = await addressValidators.createAddressValidator.validate(req.body);

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

            const { error } = await addressValidators.findAddressValidator.validate(filter);

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

    isAddressExist: async (req, res, next) => {
        try {
            const { params: { addressId }, query: { preferL = 'en' } } = req;

            const address = await addressService.findAddressById(addressId);

            if (!address) {
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
