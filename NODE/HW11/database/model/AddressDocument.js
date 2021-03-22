const { DataTypes, Model } = require('sequelize');

const { tableName } = require('../../constant');
const { sequelize } = require('../index');

class AddressDocument extends Model {}

AddressDocument.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        filePath: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        tableName: tableName.ADDRESS_DOCUMENT,
        timestamps: false
    }
);

module.exports = AddressDocument;
