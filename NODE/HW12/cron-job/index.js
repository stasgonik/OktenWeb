const cron = require('node-cron');

const removeOldTokens = require('./removeOldToken');

module.exports = () => {
    cron.schedule('0 0 * * *', async () => {
        await removeOldTokens();
    });
};
