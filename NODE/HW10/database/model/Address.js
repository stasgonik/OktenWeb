const { DataTypes } = require('sequelize');

const AddressDocument = require('./AddressDocument');
const House = require('./House');

module.exports = (client) => {
    const Address = client.define(
        'Address',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            country: {
                type: DataTypes.STRING,
                required: true
            },
            region: {
                type: DataTypes.STRING,
                required: true
            },
            town: {
                type: DataTypes.STRING,
                required: true
            },
            street: {
                type: DataTypes.STRING,
                required: true
            },
            number: {
                type: DataTypes.INTEGER,
                required: true
            },
        },
        {
            tableName: 'addresses',
            timestamps: false
        }
    );
    Address.belongsTo(House, { foreignKey: 'houseId' });
    Address.hasMany(AddressDocument, { foreignKey: 'addressId' });
    return Address;
};
