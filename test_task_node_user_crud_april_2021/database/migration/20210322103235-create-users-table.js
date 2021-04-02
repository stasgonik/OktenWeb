const { tableName } = require('../../constant');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable(tableName.USER, {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            age: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
            },
            gender: {
                type: Sequelize.DataTypes.STRING
            },
            first_name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            last_name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            avatar: {
                type: Sequelize.DataTypes.STRING
            }
        });
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable(tableName.USER);
    }
};
