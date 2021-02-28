const errorMessage = require('../message/error.message');
const House = require('../dataBase/model/House');
require('../dataBase/model/Address');

module.exports = {
    findHouses: async (query, preferL) => {
        if (!query) {
            return House.find();
        }

        const find = await House.find(query);

        if (!find) {
            throw new Error(errorMessage.NO_RESULT_FOUND[preferL]);
        }

        return find;
    },

    createHouse: (house) => {
        House.create(house);
    },

    findHouseById: async (houseId, preferL) => {
        const house = await House.findById(houseId);

        if (!house) {
            throw new Error(errorMessage.NO_RESULT_FOUND[preferL]);
        }

        return house;
    },

    deleteHouse: (houseId) => {
        House.findByIdAndRemove(houseId);
    },
};
