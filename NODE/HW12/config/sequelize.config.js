const {
    HOST, SQL_DB, SQL_DIALEKT, SQL_PASSWORD, SQL_USER
} = require('./config');

module.exports = {
    development: {
        username: SQL_USER,
        password: SQL_PASSWORD,
        database: SQL_DB,
        host: HOST,
        dialect: SQL_DIALEKT,
    }
};
