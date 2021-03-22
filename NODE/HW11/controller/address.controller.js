const {
    dataBaseSchemaEnum,
    itemTypeEnum,
    statusCodeEnum: statusCode
} = require('../constant');
const { successMessage } = require('../message');
const { sequelize } = require('../database');
const { addressService, addressDocumentService, fileService, } = require('../service');

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
        const transaction = sequelize.transaction();
        try {
            const { docs, query: { preferL = 'en' } } = req;

            const address = await addressService.createAddress(req.body, transaction);

            if (docs) {
                const promises = [];
                docs.forEach((doc) => {
                    promises.push(fileService.uploadFileSeparate(
                        doc,
                        itemTypeEnum.DOCUMENT,
                        address.id,
                        dataBaseSchemaEnum.ADDRESS,
                        addressDocumentService,
                        transaction
                    ));
                });
                await Promise.allSettled(promises);
            }

            transaction.commit();

            res.status(statusCode.CREATED).json(successMessage.ADDRESS_CREATED[preferL]);
        } catch (e) {
            transaction.rollback();
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
        const transaction = sequelize.transaction();
        try {
            const { params: { addressId }, query: { preferL = 'en' } } = req;

            await fileService.deleteUserFiles(addressId, dataBaseSchemaEnum.ADDRESS);

            await addressDocumentService.deleteFileEntry({ Address: addressId }, transaction);

            await addressService.deleteAddress(addressId, transaction);

            transaction.commit();

            res.status(statusCode.OK).json(successMessage.ADDRESS_DELETED[preferL]);
        } catch (e) {
            transaction.rollback();
            next(e);
        }
    },
};
