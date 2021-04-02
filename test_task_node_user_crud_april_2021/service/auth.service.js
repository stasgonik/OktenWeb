const { Token } = require('../database/model');
const { tokenizer } = require('../helper');
const logger = require('../logger')();

module.exports = {
    generateTokens: async (user, transaction) => {
        const tokens = tokenizer();

        await Token.create({ ...tokens, userId: user.id }, transaction);

        logger.warn('Created new token pair');

        return tokens;
    },

    refreshTokens: async (oldTokens, role, transaction) => {
        const tokens = tokenizer();

        await Token.update(tokens, {
            where: {
                id: oldTokens.id
            },
            transaction
        });

        logger.info('Refreshed token pair');

        return tokens;
    },

    deleteAllUserTokens: async (userId, transaction) => {
        await Token.destroy({ where: { userId }, transaction });
    },

    deleteTokens: async (filter) => {
        await Token.destroy({
            where: {
                filter
            }
        });
    },

    findToken: (filterObject) => Token.findOne({ where: filterObject }),
};
