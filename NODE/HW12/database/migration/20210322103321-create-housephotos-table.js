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

        await queryInterface.createTable(tableName.HOUSE_PHOTO, {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            filePath: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            House: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: tableName.HOUSE,
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

        await queryInterface.dropTable(tableName.HOUSE_PHOTO);
    }
};