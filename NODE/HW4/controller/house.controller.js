const houseService = require('../service/house.service');
const statusCode = require('../constant/statusCode.enum');
const successMessage = require('../message/success.message');

module.exports = {
    getHouses: async (req, res) => {
        try {
            /*
             не придумал как исключить preferL от req.query и отправить их раздельно,
              так что временно передаю через req.body несмотря на отсутствие такого у GET
            */
            const { preferL = 'en' } = req.body;
            const houses = await houseService.findHouses(req.query, preferL);

            res.status(statusCode.OK).json(houses);
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    createHouse: async (req, res) => {
        try {
            const { preferL = 'en' } = req.query;

            await houseService.createHouse(req.body);

            res.status(statusCode.CREATED).json(successMessage.HOUSE_CREATED[preferL]);
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    getSingleHouse: async (req, res) => {
        try {
            const { houseId } = req.params;
            const { preferL = 'en' } = req.query;

            const house = await houseService.findHouseById(houseId, preferL);

            res.status(statusCode.OK).json(house);
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    deleteSingleHouse: async (req, res) => {
        try {
            const { preferL = 'en' } = req.query;
            const { houseId } = req.params;

            await houseService.deleteHouse(houseId);

            res.status(statusCode.OK).json(successMessage.HOUSE_DELETED[preferL]);
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },
};
