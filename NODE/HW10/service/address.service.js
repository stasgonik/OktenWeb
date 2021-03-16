//     createAddress: (address) => Address.create(address),
//
//     findAddressById: (addressId) => Address.findById(addressId),
//
//     deleteAddress: (addressId) => Address.findByIdAndRemove(addressId),
//
//     updateOne: (addressId, updateObject) => Address.updateOne({ _id: addressId }, updateObject, { upsert: true })
// };

const db = require('../database').getInstance();
const { queryBuilder: { addressFilterObjectBuilder }, utilHelper: { preFindQueryHelper } } = require('../helper');

module.exports = {
    findAddresses: async (query) => {
        const Address = db.getModel('Address');

        const {
            limit, filters, keys, skip, page, sort
        } = preFindQueryHelper(query);

        const filterObject = addressFilterObjectBuilder(filters, keys);

        const addresses = await Address.findAll({
            where: filterObject,
            sort,
            offset: skip,
            limit
        });

        const count = await Address.count({
            where: filterObject
        });

        return {
            data: addresses,
            page,
            limit,
            count
        };
    },
    createAddress: (address) => {
        const Address = db.getModel('Address');

        return Address.create(address);
    },

    findAddressById: (addressId) => {
        const Address = db.getModel('Address');

        return Address.findByPk(addressId);
    },

    deleteAddress: async (addressId) => {
        const Address = db.getModel('Address');

        await Address.findByIdAndDelete(addressId);
    },
};
