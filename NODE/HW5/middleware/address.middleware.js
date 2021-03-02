const { addressService } = require('../service');
const { statusCodeEnum: statusCode } = require('../constant');
const { errorMessage } = require('../message');
const { utilValidators, addressValidators } = require('../validator');

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

    isAddressValid: async (req, res, next) => {
        try {
            const { error } = await addressValidators.createAddressValidator.validate(req.body);

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

            const { error } = await addressValidators.findAddressValidator.validate(filter);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    isAddressSearchResultExist: async (req, res, next) => {
        try {
            const { preferL = 'en' } = req.query;
            const filter = req.query;

            delete filter.preferL;

            const addresses = await addressService.findAddresses(filter);

            if (filter && !addresses.length) {
                throw new Error(errorMessage.NO_RESULT_FOUND[preferL]);
            }

            next();
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    isAddressExist: async (req, res, next) => {
        try {
            const { addressId } = req.params;
            const { preferL = 'en' } = req.query;

            const address = await addressService.findAddressById(addressId);

            if (!address) {
                throw new Error(errorMessage.NO_RESULT_FOUND[preferL]);
            }

            next();
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    }
};
