// const { DataTypes } = require('sequelize');
//
// module.exports = (client) => {
//     const Token = client.define(
//         'Token',
//         {
//             id: {
//                 type: DataTypes.INTEGER,
//                 primaryKey: true,
//                 autoIncrement: true
//             },
//             access_token: {
//                 type: DataTypes.STRING,
//                 allowNull: false
//             },
//             refresh_token: {
//                 type: DataTypes.STRING,
//                 allowNull: false
//             },
//         },
//         {
//             tableName: 'tokens',
//             timestamps: false
//         }
//     );
//
//     return Token;
// };

const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../index');

class Token extends Model {}

Token.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        access_token: {
            type: DataTypes.STRING,
            allowNull: false
        },
        refresh_token: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        tableName: 'tokens',
        timestamps: false
    }
);

module.exports = Token;
