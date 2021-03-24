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

        await queryInterface.createTable(tableName.HOUSE, {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            area: {
                type: Sequelize.DataTypes.DOUBLE,
                allowNull: false
            },
            price: {
                type: Sequelize.DataTypes.DOUBLE,
                allowNull: false
            },
            year_builded: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
            },
            year_selled: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
            },
            userId: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: tableName.USER,
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

        await queryInterface.dropTable(tableName.HOUSE);
    }
};
