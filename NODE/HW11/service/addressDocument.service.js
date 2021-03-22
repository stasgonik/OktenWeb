const { AddressDocument } = require('../database/model');

module.exports = {
    createFileEntry: async (documentObject, transaction) => {
        await AddressDocument.create(documentObject, { transaction });
    },
    deleteFileEntry: async (filter, transaction) => {
        await AddressDocument.destroy({
            where: filter,
            transaction
        });
    }
};
