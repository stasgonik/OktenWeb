const { DataTypes } = require('sequelize');

module.exports = (client) => {
    const HousePhoto = client.define(
        'HousePhoto',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            path: {
                type: DataTypes.STRING,
                required: true
            },
        },
        {
            tableName: 'housePhotos',
            timestamps: false
        }
    );

    return HousePhoto;
};
