const { config: { SQL_DB } } = require('../../config');
const { tableName } = require('../../constant');

module.exports = {
    up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

        await queryInterface.createTable(tableName.ADDRESS, {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            country: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            region: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            town: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            street: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            number: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
            },
            houseId: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: tableName.HOUSE,
                        schema: SQL_DB
                    },
                    key: 'id'
                }
            }
        });
    },

    down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

        await queryInterface.dropTable(tableName.ADDRESS);
    }
};
