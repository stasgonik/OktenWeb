const { itemTypeEnum, statusCodeEnum: statusCode } = require('../constant');
const { ErrorHandler } = require('.');
const { errorMessage } = require('../message');

module.exports = {
    addressFilterObjectBuilder: (filters, keys) => {
        const filterObject = {};

        keys.forEach((key) => {
            switch (key) {
                case 'number_GTE':
                    filterObject.number = Object.assign({}, filterObject.number, { $gte: +filters.number_GTE });
                    break;
                case 'number_LTE':
                    filterObject.number = Object.assign({}, filterObject.number, { $lte: +filters.number_LTE });
                    break;
                case 'town':
                    filterObject.town = { $regex: filters.town, $options: 'i' };
                    break;
                case 'street':
                    filterObject.street = { $regex: filters.street, $options: 'i' };
                    break;
                default:
                    filterObject[key] = filters[key];
            }
        });

        return filterObject;
    },

    houseFilterObjectBuilder: (filters, keys) => {
        const filterObject = {};

        keys.forEach((key) => {
            switch (key) {
                case 'area_GTE':
                    filterObject.area = Object.assign({}, filterObject.area, { $gte: +filters.area_GTE });
                    break;
                case 'area_LTE':
                    filterObject.area = Object.assign({}, filterObject.area, { $lte: +filters.area_LTE });
                    break;

                case 'price_GTE':
                    filterObject.price = Object.assign({}, filterObject.price, { $gte: +filters.price_GTE });
                    break;
                case 'price_LTE':
                    filterObject.price = Object.assign({}, filterObject.price, { $lte: +filters.price_LTE });
                    break;

                case 'year_builded_GTE':
                    filterObject.year_builded = Object.assign(
                        {},
                        filterObject.year_builded,
                        { $gte: +filters.year_builded_GTE }
                    );
                    break;
                case 'year_builded_LTE':
                    filterObject.year_builded = Object.assign(
                        {},
                        filterObject.year_builded,
                        { $lte: +filters.year_builded_LTE }
                    );
                    break;

                case 'year_selled_GTE':
                    filterObject.year_selled = Object.assign(
                        {},
                        filterObject.year_selled,
                        { $gte: +filters.year_selled_GTE }
                    );
                    break;
                case 'year_selled_LTE':
                    filterObject.year_selled = Object.assign(
                        {},
                        filterObject.year_selled,
                        { $lte: +filters.year_selled_LTE }
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
                    filterObject.age = Object.assign({}, filterObject.age, { $gte: +filters.age_GTE });
                    break;
                case 'age_LTE':
                    filterObject.age = Object.assign({}, filterObject.age, { $lte: +filters.age_LTE });
                    break;
                case 'first_name':
                    filterObject.first_name = { $regex: filters.first_name, $options: 'i' };
                    break;
                case 'last_name':
                    filterObject.last_name = { $regex: filters.last_name, $options: 'i' };
                    break;
                case 'full_name':
                    filterObject.full_name = { $regex: filters.full_name, $options: 'i' };
                    break;
                default:
                    filterObject[key] = filters[key];
            }
        });

        return filterObject;
    },

    updateObjectBuilder: (uploadPath, itemType) => {
        let updateObject = {};

        if (itemType === itemTypeEnum.AVATAR) {
            updateObject = { $set: { [itemType]: uploadPath } };
            return updateObject;
        }

        if (itemType === itemTypeEnum.DOCUMENT || itemType === itemTypeEnum.PHOTO) {
            updateObject = { $push: { [itemType]: uploadPath } };
            return updateObject;
        }

        throw new ErrorHandler(statusCode.BAD_REQUEST,
            errorMessage.INVALID_FILE_TYPE.customCode,
            errorMessage.INVALID_FILE_TYPE.en);
    },
};
