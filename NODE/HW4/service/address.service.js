const errorMessage = require('../message/error.message');
const Address = require('../dataBase/model/Address');

module.exports = {
    findAddresses: async (query, preferL) => {
        if (!query) {
            return Address.find();
        }

        const find = await Address.find(query);

        if (!find.length) {
            throw new Error(errorMessage.NO_RESULT_FOUND[preferL]);
        }

        return find;
    },

    createAddress: (address) => {
        Address.create(address);
    },

    getSingleAddress: async (addressId, preferL) => {
        const address = await Address.findById(addressId);

        if (!address) {
            throw new Error(errorMessage.NO_RESULT_FOUND[preferL]);
        }

        return address;
    },

    deleteSingleAddress: (addressId) => {
        Address.findByIdAndRemove(addressId);
    },
};
