// const { DataTypes } = require('sequelize');
//
// const HousePhoto = require('./HousePhoto');
// const User = require('./User');
//
// module.exports = (client) => {
//     const House = client.define(
//         'House',
//         {
//             id: {
//                 type: DataTypes.INTEGER,
//                 primaryKey: true,
//                 autoIncrement: true
//             },
//             area: {
//                 type: DataTypes.DOUBLE,
//                 allowNull: false
//             },
//             price: {
//                 type: DataTypes.DOUBLE,
//                 allowNull: false
//             },
//             year_builded: {
//                 type: DataTypes.INTEGER,
//                 allowNull: false
//             },
//             year_selled: {
//                 type: DataTypes.INTEGER,
//                 allowNull: false
//             }
//         },
//         {
//             tableName: 'houses',
//             timestamps: false
//         }
//     );
//
//     House.belongsTo(User, { foreignKey: 'userId' });
//     House.hasMany(HousePhoto, { foreignKey: 'House' });
//     return House;
// };

const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../index');

const HousePhoto = require('./HousePhoto');
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
        tableName: 'houses',
        timestamps: false
    }
);

House.belongsTo(User, { foreignKey: 'userId' });
House.hasMany(HousePhoto, { foreignKey: 'House' });

module.exports = House;
