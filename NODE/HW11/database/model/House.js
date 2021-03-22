const { DataTypes, Model } = require('sequelize');

const { tableName } = require('../../constant');
const HousePhoto = require('./HousePhoto');
const { sequelize } = require('../index');
const User = require('./User');

class House extends Model {}

House.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        area: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        year_builded: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        year_selled: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: tableName.HOUSE,
        timestamps: false
    }
);

House.belongsTo(User, { foreignKey: 'userId' });
House.hasMany(HousePhoto, { foreignKey: 'House' });

module.exports = House;
