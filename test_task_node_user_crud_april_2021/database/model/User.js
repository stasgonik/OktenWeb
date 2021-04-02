const { DataTypes, Model } = require('sequelize');

const { tableName } = require('../../constant');
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
        activation_token: {
            type: DataTypes.STRING,
        },
        activation_status: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
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
        tableName: tableName.USER,
        paranoid: true,
        defaultScope: {
            attributes: {
                exclude:
                    [
                        'activation_token',
                        'password'
                    ]
            }
        },
        scopes: {
            getAll: {
                attributes: { }
            }
        }
    }
);

User.hasMany(Token, { foreignKey: 'userId' });

module.exports = User;
