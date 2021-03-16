const {
    dataBaseSchemaEnum,
    itemTypeEnum,
    statusCodeEnum: statusCode
} = require('../constant');
const { successMessage } = require('../message');
const { addressService, fileService } = require('../service');

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
            const { docs, query: { preferL = 'en' } } = req;

            const address = await addressService.createAddress(req.body);

            if (docs) {
                const promises = [];
                docs.forEach((doc) => {
                    promises.push(fileService.uploadFile(
                        doc,
                        itemTypeEnum.DOCUMENT,
                        address._id,
                        dataBaseSchemaEnum.ADDRESS,
                        addressService
                    ));
                });
                await Promise.allSettled(promises);
            }

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
            const { params: { addressId }, query: { preferL = 'en' } } = req;

            await addressService.deleteAddress(addressId);

            await fileService.deleteUserFiles(addressId, dataBaseSchemaEnum.ADDRESS);

            res.status(statusCode.OK).json(successMessage.ADDRESS_DELETED[preferL]);
        } catch (e) {
            next(e);
        }
    },
};
