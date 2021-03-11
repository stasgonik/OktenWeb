const { Address } = require('../model');

module.exports = {
    findAddresses: (query) => Address.find(query),

    createAddress: (address) => Address.create(address),

    findAddressById: (addressId) => Address.findById(addressId),

    deleteAddress: (addressId) => Address.findByIdAndRemove(addressId),

    updateOne: (addressId, updateObject) => Address.updateOne({ _id: addressId }, updateObject, { upsert: true })
};
