const { HousePhoto } = require('../database/model');

module.exports = {
    createFileEntry: async (photoObject) => {
        await HousePhoto.create(photoObject);
    },
    deleteFileEntry: async (filter) => {
        await HousePhoto.destroy({
            where: filter
        });
    },
};
