const { houseService } = require('../service');
const { statusCodeEnum: statusCode } = require('../constant');
const { errorMessage } = require('../message');
const { utilValidators, houseValidators } = require('../validator');

module.exports = {
    isIdValid: async (req, res, next) => {
        try {
            const { houseId } = req.params;

            const { error } = await utilValidators.idMongooseValidator.validate(houseId);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    isHouseValid: async (req, res, next) => {
        try {
            const { error } = await houseValidators.createHouseValidator.validate(req.body);

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

            const { error } = await houseValidators.findHouseValidator.validate(filter);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    isHouseSearchResultExist: async (req, res, next) => {
        try {
            const { preferL = 'en' } = req.query;
            const filter = req.query;

            delete filter.preferL;

            const houses = await houseService.findHouses(filter, preferL);

            if (filter && !houses.length) {
                throw new Error(errorMessage.NO_RESULT_FOUND[preferL]);
            }

            next();
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    isHouseExist: async (req, res, next) => {
        try {
            const { houseId } = req.params;
            const { preferL = 'en' } = req.query;

            const house = await houseService.findHouseById(houseId);

            if (!house) {
                throw new Error(errorMessage.NO_RESULT_FOUND[preferL]);
            }

            next();
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    }
};
