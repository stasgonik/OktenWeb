const { DataTypes } = require('sequelize');

module.exports = (client) => {
    const Token = client.define(
        'Token',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            access_token: {
                type: DataTypes.STRING,
                required: true
            },
            refresh_token: {
                type: DataTypes.STRING,
                required: true
            },
        },
        {
            tableName: 'tokens',
            timestamps: false
        }
    );

    return Token;
};
