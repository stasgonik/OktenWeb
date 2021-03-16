const { DataTypes } = require('sequelize');

module.exports = (client) => {
    const AddressDocument = client.define(
        'AddressDocument',
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
            tableName: 'addressDocuments',
            timestamps: false
        }
    );

    return AddressDocument;
};
