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

        await queryInterface.createTable(tableName.TOKEN, {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            access_token: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            refresh_token: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            User: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: tableName.USER,
                        schema: SQL_DB
                    },
                    key: 'id'
                },
                allowNull: false,
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

        await queryInterface.dropTable(tableName.TOKEN);
    }
};
