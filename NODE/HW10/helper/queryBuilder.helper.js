const { Op } = require('sequelize');

module.exports = {
    addressFilterObjectBuilder: (filters, keys) => {
        const filterObject = {};

        keys.forEach((key) => {
            switch (key) {
                case 'number_GTE':
                    filterObject.number = Object.assign({}, filterObject.number, { [Op.gte]: +filters.number_GTE });
                    break;
                case 'number_LTE':
                    filterObject.number = Object.assign({}, filterObject.number, { [Op.lte]: +filters.number_LTE });
                    break;
                case 'town':
                    filterObject.town = { [Op.like]: filters.town };
                    break;
                case 'street':
                    filterObject.street = { [Op.like]: filters.street };
                    break;
                default:
                    filterObject[key] = filters[key];
            }
        });

        return filterObject;
    },

    fileCreateObjectBuilder: (uploadPath, ownerType, ownerId) => ({ filePath: uploadPath, [ownerType]: ownerId }),

    fileUpdateObjectBuilder: (uploadPath, itemType) => ({ [itemType]: uploadPath }),

    houseFilterObjectBuilder: (filters, keys) => {
        const filterObject = {};

        keys.forEach((key) => {
            switch (key) {
                case 'area_GTE':
                    filterObject.area = Object.assign({}, filterObject.area, { [Op.gte]: +filters.area_GTE });
                    break;
                case 'area_LTE':
                    filterObject.area = Object.assign({}, filterObject.area, { [Op.lte]: +filters.area_LTE });
                    break;

                case 'price_GTE':
                    filterObject.price = Object.assign({}, filterObject.price, { [Op.gte]: +filters.price_GTE });
                    break;
                case 'price_LTE':
                    filterObject.price = Object.assign({}, filterObject.price, { [Op.lte]: +filters.price_LTE });
                    break;

                case 'year_builded_GTE':
                    filterObject.year_builded = Object.assign(
                        {},
                        filterObject.year_builded,
                        { [Op.gte]: +filters.year_builded_GTE }
                    );
                    break;
                case 'year_builded_LTE':
                    filterObject.year_builded = Object.assign(
                        {},
                        filterObject.year_builded,
                        { [Op.lte]: +filters.year_builded_LTE }
                    );
                    break;

                case 'year_selled_GTE':
                    filterObject.year_selled = Object.assign(
                        {},
                        filterObject.year_selled,
                        { [Op.gte]: +filters.year_selled_GTE }
                    );
                    break;
                case 'year_selled_LTE':
                    filterObject.year_selled = Object.assign(
                        {},
                        filterObject.year_selled,
                        { [Op.lte]: +filters.year_selled_LTE }
                    );
                    break;

                default:
                    filterObject[key] = filters[key];
            }
        });

        return filterObject;
    },

    userFilterObjectBuilder: (filters, keys) => {
        const filterObject = {};

        keys.forEach((key) => {
            switch (key) {
                case 'age_GTE':
                    filterObject.age = Object.assign({}, filterObject.age, { [Op.gte]: +filters.age_GTE });
                    break;
                case 'age_LTE':
                    filterObject.age = Object.assign({}, filterObject.age, { [Op.lte]: +filters.age_LTE });
                    break;
                case 'first_name':
                    filterObject.first_name = { [Op.like]: filters.first_name };
                    break;
                case 'last_name':
                    filterObject.last_name = { [Op.like]: filters.last_name };
                    break;
                case 'full_name':
                    filterObject.full_name = { [Op.like]: filters.full_name };
                    break;
                default:
                    filterObject[key] = filters[key];
            }
        });

        return filterObject;
    },
};
