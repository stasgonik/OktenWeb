const { HousePhoto } = require('../database/model');

module.exports = {
    createFileEntry: async (photoObject, transaction) => {
        await HousePhoto.create(photoObject, { transaction });
    },
    deleteFileEntry: async (filter, transaction) => {
        await HousePhoto.destroy({
            where: filter,
            transaction
        });
    }
};
