const { AddressDocument } = require('../database/model');

module.exports = {
    createFileEntry: async (documentObject) => {
        await AddressDocument.create(documentObject);
    },
    deleteFileEntry: async (documentId) => {
        await AddressDocument.destroy({
            where: {
                id: documentId
            }
        });
    }
};
