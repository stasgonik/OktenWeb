const { AddressDocument } = require('../database/model');

module.exports = {
    createFileEntry: async (documentObject) => {
        await AddressDocument.create(documentObject);
    },
    deleteFileEntry: async (filter) => {
        await AddressDocument.destroy({
            where: filter
        });
    }
};
