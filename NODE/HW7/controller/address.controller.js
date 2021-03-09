const { statusCodeEnum: statusCode } = require('../constant');
const { successMessage } = require('../message');
const { addressService } = require('../service');

module.exports = {
    getAddresses: async (req, res, next) => {
        try {
            const filter = req.query;

            delete filter.preferL;

            const addresses = await addressService.findAddresses(filter);

            res.status(statusCode.OK).json(addresses);
        } catch (e) {
            next(e);
        }
    },

    createAddress: async (req, res, next) => {
        try {
            const { preferL = 'en' } = req.query;

            await addressService.createAddress(req.body);

            res.status(statusCode.CREATED).json(successMessage.ADDRESS_CREATED[preferL]);
        } catch (e) {
            next(e);
        }
    },

    getSingleAddress: async (req, res, next) => {
        try {
            const { addressId } = req.params;

            const address = await addressService.findAddressById(addressId);

            res.status(statusCode.OK).json(address);
        } catch (e) {
            next(e);
        }
    },

    deleteSingleAddress: async (req, res, next) => {
        try {
            const { preferL = 'en' } = req.query;
            const { addressId } = req.params;

            await addressService.deleteAddress(addressId);

            res.status(statusCode.OK).json(successMessage.ADDRESS_DELETED[preferL]);
        } catch (e) {
            next(e);
        }
    },
};
