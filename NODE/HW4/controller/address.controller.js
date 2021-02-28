const addressService = require('../service/address.service');
const statusCode = require('../constant/statusCode.enum');
const successMessage = require('../message/success.message');

module.exports = {
    getAddresses: async (req, res) => {
        try {
            /*
             не придумал как исключить preferL от req.query и отправить их раздельно,
              так что временно передаю через req.body несмотря на отсутствие такого у GET
            */
            const { preferL = 'en' } = req.body;
            const addresses = await addressService.findAddresses(req.query, preferL);

            res.status(statusCode.OK).json(addresses);
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    createAddress: async (req, res) => {
        try {
            const { preferL = 'en' } = req.query;

            await addressService.createAddress(req.body);

            res.status(statusCode.CREATED).json(successMessage.ADDRESS_CREATED[preferL]);
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    getSingleAddress: async (req, res) => {
        try {
            const { addressId } = req.params;
            const { preferL = 'en' } = req.query;

            const address = await addressService.findAddressById(addressId, preferL);

            res.status(statusCode.OK).json(address);
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    deleteSingleAddress: async (req, res) => {
        try {
            const { preferL = 'en' } = req.query;
            const { addressId } = req.params;

            await addressService.deleteAddress(addressId);

            res.status(statusCode.OK).json(successMessage.ADDRESS_DELETED[preferL]);
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },
};
