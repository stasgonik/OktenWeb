const {
    dataBaseSchemaEnum,
    itemTypeEnum,
    statusCodeEnum: statusCode
} = require('../constant');
const { successMessage } = require('../message');
const { sequelize } = require('../database');
const { fileService, houseService, housePhotoService } = require('../service');

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
        const transaction = sequelize.transaction();
        try {
            const { photos, query: { preferL = 'en' } } = req;

            const house = await houseService.createHouse(req.body, transaction);

            if (photos) {
                const promises = [];
                photos.forEach((photo) => {
                    promises.push(fileService.uploadFileSeparate(
                        photo,
                        itemTypeEnum.PHOTO,
                        house.id,
                        dataBaseSchemaEnum.HOUSE,
                        housePhotoService,
                        transaction
                    ));
                });
                await Promise.allSettled(promises);
            }

            transaction.commit();

            res.status(statusCode.CREATED).json(successMessage.HOUSE_CREATED[preferL]);
        } catch (e) {
            transaction.rollback();
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
        const transaction = sequelize.transaction();
        try {
            const { params: { houseId }, query: { preferL = 'en' } } = req;

            await fileService.deleteUserFiles(houseId, dataBaseSchemaEnum.HOUSE);

            await housePhotoService.deleteFileEntry({ House: houseId }, transaction);

            await houseService.deleteHouse(houseId, transaction);

            transaction.commit();

            res.status(statusCode.OK).json(successMessage.HOUSE_DELETED[preferL]);
        } catch (e) {
            transaction.rollback();
            next(e);
        }
    },
};
