const { DataTypes } = require('sequelize');

const Token = require('./Token');

module.exports = (client) => {
    const User = client.define(
        'User',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            age: {
                type: DataTypes.INTEGER,
                required: true
            },
            gender: {
                type: DataTypes.STRING
            },
            first_name: {
                type: DataTypes.STRING,
                required: true
            },
            last_name: {
                type: DataTypes.STRING,
                required: true
            },
            password: {
                type: DataTypes.STRING,
                required: true,
                select: false
            },
            email: {
                type: DataTypes.STRING,
                required: true,
            },
            avatar: {
                type: DataTypes.STRING
            }
        },
        {
            tableName: 'users',
            timestamps: false
        }
    );

    User.hasMany(Token, { foreignKey: 'userId' });
    return User;
};
