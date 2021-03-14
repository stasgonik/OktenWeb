const { queryBuilder: { houseFilterObjectBuilder }, utilHelper: { preFindQueryHelper } } = require('../helper');
const { House } = require('../model');
require('../model/Address');

module.exports = {
    findHouses: async (query) => {
        const {
            limit, filters, keys, skip, page, sort
        } = preFindQueryHelper(query);

        const filterObject = houseFilterObjectBuilder(filters, keys);

        const houses = await House.find(filterObject).limit(+limit).skip(skip).sort(sort);
        const count = await House.countDocuments(filterObject);

        return {
            data: houses,
            page,
            limit,
            count
        };
    },

    createHouse: (house) => House.create(house),

    findHouseById: (houseId) => House.findById(houseId),

    deleteHouse: (houseId) => House.findByIdAndRemove(houseId),

    updateOne: (houseId, updateObject) => House.updateOne({ _id: houseId }, updateObject, { upsert: true })
};
