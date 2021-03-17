const { Address } = require('../database/model');
const { queryBuilder: { addressFilterObjectBuilder }, utilHelper: { preFindQueryHelper } } = require('../helper');

module.exports = {
    findAddresses: async (query) => {
        const {
            limit, filters, keys, offset, page, sort
        } = preFindQueryHelper(query);

        const filterObject = addressFilterObjectBuilder(filters, keys);

        const addresses = await Address.findAll({
            where: filterObject,
            sort,
            offset,
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
    createAddress: (address) => Address.create(address),

    findAddressById: (addressId) => Address.findByPk(addressId),

    deleteAddress: async (addressId) => {
        await Address.destroy({
            where: {
                id: addressId
            }
        });
    },
};
