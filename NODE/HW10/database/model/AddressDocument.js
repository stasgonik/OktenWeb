const { DataTypes, Model } = require('sequelize');
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
        tableName: 'addressdocuments',
        timestamps: false
    }
);

module.exports = AddressDocument;
