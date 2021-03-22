const Sequelize = require('sequelize');

const {
    config: {
        HOST, SQL_DB, SQL_DIALEKT, SQL_PASSWORD, SQL_USER
    }
} = require('../config');

module.exports.sequelize = new Sequelize(SQL_DB, SQL_USER, SQL_PASSWORD, {
    host: HOST,
    dialect: SQL_DIALEKT,
    logging: false
});
