const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../index');

const Token = require('./Token');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        avatar: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        tableName: 'users',
        timestamps: false
    }
);

User.hasMany(Token, { foreignKey: 'userId' });

module.exports = User;

// module.exports = (client) => {
//     const User = client.define(
//         'User',
//         {
//             id: {
//                 type: DataTypes.INTEGER,
//                 primaryKey: true,
//                 autoIncrement: true
//             },
//             age: {
//                 type: DataTypes.INTEGER,
//                 allowNull: false
//             },
//             gender: {
//                 type: DataTypes.STRING
//             },
//             first_name: {
//                 type: DataTypes.STRING,
//                 allowNull: false
//             },
//             last_name: {
//                 type: DataTypes.STRING,
//                 allowNull: false
//             },
//             password: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 select: false
//             },
//             email: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 unique: true
//             },
//             avatar: {
//                 type: DataTypes.STRING
//             }
//         },
//         {
//             tableName: 'users',
//             timestamps: false
//         }
//     );
//
//     User.hasMany(Token, { foreignKey: 'userId' });
//     return User;
// };
