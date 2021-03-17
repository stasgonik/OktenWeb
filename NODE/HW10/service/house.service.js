const { House } = require('../database/model');
const { queryBuilder: { houseFilterObjectBuilder }, utilHelper: { preFindQueryHelper } } = require('../helper');

module.exports = {
    findHouses: async (query) => {
        const {
            limit, filters, keys, offset, page, sort
        } = preFindQueryHelper(query);

        const filterObject = houseFilterObjectBuilder(filters, keys);

        const houses = await House.findAll({
            where: filterObject,
            sort,
            offset,
            limit
        });

        const count = await House.count({
            where: filterObject
        });

        return {
            data: houses,
            page,
            limit,
            count
        };
    },
    createHouse: (house) => House.create(house),

    findHouseById: (houseId) => House.findByPk(houseId),

    deleteHouse: async (houseId) => {
        await House.destroy({
            where: {
                id: houseId
            }
        });
    },
};
