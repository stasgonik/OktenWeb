const { DataTypes, Model } = require('sequelize');

const { tableName } = require('../../constant');
const { sequelize } = require('../index');

class HousePhoto extends Model {}

HousePhoto.init(
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
        tableName: tableName.HOUSE_PHOTO,
        timestamps: false
    }
);

module.exports = HousePhoto;
