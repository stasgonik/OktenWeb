const { queryBuilder: { addressFilterObjectBuilder }, utilHelper: { preFindQueryHelper } } = require('../helper');
const { Address } = require('../model');

module.exports = {
    findAddresses: async (query) => {
        const {
            limit, filters, keys, skip, page, sort
        } = preFindQueryHelper(query);

        const filterObject = addressFilterObjectBuilder(filters, keys);

        const addresses = await Address.find(filterObject).limit(+limit).skip(skip).sort(sort);
        const count = await Address.countDocuments(filterObject);

        return {
            data: addresses,
            page,
            limit,
            count
        };
    },

    createAddress: (address) => Address.create(address),

    findAddressById: (addressId) => Address.findById(addressId),

    deleteAddress: (addressId) => Address.findByIdAndRemove(addressId),

    updateOne: (addressId, updateObject) => Address.updateOne({ _id: addressId }, updateObject, { upsert: true })
};
