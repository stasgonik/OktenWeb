const statusCode = require('../constant/statusCode.enum');
const errorMessage = require('../message/error.message');

module.exports = {
    isIdValid: (req, res, next) => {
        try {
            const { addressId } = req.params;
            const { preferL = 'en' } = req.query;

            if (addressId.length !== 24) {
                throw new Error(errorMessage.ID_IS_INVALID[preferL]);
            }

            next();
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    isAddressValid: (req, res, next) => {
        try {
            const {
                country, region, town, street, number
            } = req.body;
            const { preferL = 'en' } = req.query;

            if (!country || !region || !town || !street || !number) {
                throw new Error(errorMessage.ABSENT_FIELDS[preferL]);
            }

            if (number < 0 || !Number.isInteger(number) || Number.isNaN(number)) {
                throw new Error(errorMessage.HOUSE_NUMBER_IS_INVALID[preferL]);
            }

            next();
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    }
};
