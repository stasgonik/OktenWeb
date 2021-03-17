// const { DataTypes } = require('sequelize');
//
// module.exports = (client) => {
//     const HousePhoto = client.define(
//         'HousePhoto',
//         {
//             id: {
//                 type: DataTypes.INTEGER,
//                 primaryKey: true,
//                 autoIncrement: true
//             },
//             filePath: {
//                 type: DataTypes.STRING,
//                 allowNull: false
//             },
//         },
//         {
//             tableName: 'housePhotos',
//             timestamps: false
//         }
//     );
//
//     return HousePhoto;
// };

const { DataTypes, Model } = require('sequelize');
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
        tableName: 'housephotos',
        timestamps: false
    }
);

module.exports = HousePhoto;
