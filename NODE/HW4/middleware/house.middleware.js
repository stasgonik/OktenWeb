const statusCode = require('../constant/statusCode.enum');
const errorMessage = require('../message/error.message');

module.exports = {
    isIdValid: (req, res, next) => {
        try {
            const { houseId } = req.params;
            const { preferL = 'en' } = req.query;

            if (houseId.length !== 24) {
                throw new Error(errorMessage.ID_IS_INVALID[preferL]);
            }

            next();
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    isHouseValid: (req, res, next) => {
        try {
            const {
                area, price, year_builded, year_selled
            } = req.body;
            const { preferL = 'en' } = req.query;

            if (!area || !price || !year_builded || !year_selled) {
                throw new Error(errorMessage.ABSENT_FIELDS[preferL]);
            }

            next();
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    }
};
