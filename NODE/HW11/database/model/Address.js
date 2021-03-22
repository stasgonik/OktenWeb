const { DataTypes, Model } = require('sequelize');

const AddressDocument = require('./AddressDocument');
const { tableName } = require('../../constant');
const House = require('./House');
const { sequelize } = require('../index');

class Address extends Model {}

Address.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        region: {
            type: DataTypes.STRING,
            allowNull: false
        },
        town: {
            type: DataTypes.STRING,
            allowNull: false
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        sequelize,
        tableName: tableName.ADDRESS,
        timestamps: false
    }
);

Address.belongsTo(House, { foreignKey: 'houseId' });
Address.hasMany(AddressDocument, { foreignKey: 'Address' });

module.exports = Address;
