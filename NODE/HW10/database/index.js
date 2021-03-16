const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');

const {
    SQL_DB, SQL_DIALEKT, SQL_PASSWORD, SQL_USER
} = require('../config/config');

module.exports = (() => {
    let instance;

    const initConnection = () => {
        const client = new Sequelize(SQL_DB, SQL_USER, SQL_PASSWORD, { dialect: SQL_DIALEKT });

        const models = {};
        const modelsPath = path.join(process.cwd(), 'database', 'model');

        const getModels = () => {
            fs.readdir(modelsPath, (err, files) => {
                files.forEach((file) => {
                    const [model] = file.split('.');
                    const modelFile = require(path.join(modelsPath, model));

                    models[model] = modelFile(client);
                });
            });
        };

        return {
            setModels: () => getModels(),
            getModel: (modelName) => models[modelName]
        };
    };

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection();
            }

            return instance;
        }
    };
})();
