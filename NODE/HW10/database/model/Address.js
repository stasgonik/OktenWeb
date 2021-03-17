// const { DataTypes } = require('sequelize');
//
// const AddressDocument = require('./AddressDocument');
// const House = require('./House');
//
// module.exports = (client) => {
//     const Address = client.define(
//         'Address',
//         {
//             id: {
//                 type: DataTypes.INTEGER,
//                 primaryKey: true,
//                 autoIncrement: true
//             },
//             country: {
//                 type: DataTypes.STRING,
//                 allowNull: false
//             },
//             region: {
//                 type: DataTypes.STRING,
//                 allowNull: false
//             },
//             town: {
//                 type: DataTypes.STRING,
//                 allowNull: false
//             },
//             street: {
//                 type: DataTypes.STRING,
//                 allowNull: false
//             },
//             number: {
//                 type: DataTypes.INTEGER,
//                 allowNull: false
//             },
//         },
//         {
//             tableName: 'addresses',
//             timestamps: false
//         }
//     );
//     Address.belongsTo(House, { foreignKey: 'houseId' });
//     Address.hasMany(AddressDocument, { foreignKey: 'Address' });
//     return Address;
// };

const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../index');

const AddressDocument = require('./AddressDocument');
const House = require('./House');

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
        tableName: 'addresses',
        timestamps: false
    }
);

Address.belongsTo(House, { foreignKey: 'houseId' });
Address.hasMany(AddressDocument, { foreignKey: 'Address' });

module.exports = Address;
