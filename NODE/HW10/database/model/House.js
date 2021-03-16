const { DataTypes } = require('sequelize');

const HousePhoto = require('./HousePhoto');
const User = require('./User');

module.exports = (client) => {
    const House = client.define(
        'House',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            area: {
                type: DataTypes.DOUBLE,
                required: true
            },
            price: {
                type: DataTypes.DOUBLE,
                required: true
            },
            year_builded: {
                type: DataTypes.INTEGER,
                required: true
            },
            year_selled: {
                type: DataTypes.INTEGER,
                required: true
            }
        },
        {
            tableName: 'houses',
            timestamps: false
        }
    );

    House.belongsTo(User, { foreignKey: 'userId' });
    House.hasMany(HousePhoto, { foreignKey: 'houseId' });
    return House;
};
