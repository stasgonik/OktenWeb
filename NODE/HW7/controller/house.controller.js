const { statusCodeEnum: statusCode } = require('../constant');
const { successMessage } = require('../message');
const { houseService } = require('../service');

module.exports = {
    getHouses: async (req, res, next) => {
        try {
            const filter = req.query;

            delete filter.preferL;

            const houses = await houseService.findHouses(filter);

            res.status(statusCode.OK).json(houses);
        } catch (e) {
            next(e);
        }
    },

    createHouse: async (req, res, next) => {
        try {
            const { preferL = 'en' } = req.query;

            await houseService.createHouse(req.body);

            res.status(statusCode.CREATED).json(successMessage.HOUSE_CREATED[preferL]);
        } catch (e) {
            next(e);
        }
    },

    getSingleHouse: async (req, res, next) => {
        try {
            const { houseId } = req.params;

            const house = await houseService.findHouseById(houseId);

            res.status(statusCode.OK).json(house);
        } catch (e) {
            next(e);
        }
    },

    deleteSingleHouse: async (req, res, next) => {
        try {
            const { preferL = 'en' } = req.query;
            const { houseId } = req.params;

            await houseService.deleteHouse(houseId);

            res.status(statusCode.OK).json(successMessage.HOUSE_DELETED[preferL]);
        } catch (e) {
            next(e);
        }
    },
};
