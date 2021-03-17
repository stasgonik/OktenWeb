const { HousePhoto } = require('../database/model');

module.exports = {
    createFileEntry: async (photoObject) => {
        await HousePhoto.create(photoObject);
    },
    deleteFile: async (photoId) => {
        await HousePhoto.destroy({
            where: {
                id: photoId
            }
        });
    }
};
