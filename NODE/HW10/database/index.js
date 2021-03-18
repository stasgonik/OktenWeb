const Sequelize = require('sequelize');

const {
    HOST, SQL_DB, SQL_DIALEKT, SQL_PASSWORD, SQL_USER
} = require('../config/config');

module.exports.sequelize = new Sequelize(SQL_DB, SQL_USER, SQL_PASSWORD, {
    host: HOST,
    dialect: SQL_DIALEKT,
    logging: false
});
