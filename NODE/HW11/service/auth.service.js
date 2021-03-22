const { Token } = require('../database/model');
const { tokenizer } = require('../helper');

module.exports = {
    generateTokens: async (user, transaction) => {
        const tokens = tokenizer();

        await Token.create({ ...tokens, userId: user.id }, transaction);

        return tokens;
    },

    refreshTokens: async (oldTokens, transaction) => {
        const tokens = tokenizer();

        await Token.update(tokens, {
            where: {
                id: oldTokens.id
            },
            transaction
        });

        return tokens;
    },

    deleteAllUserTokens: async (userId, transaction) => {
        await Token.destroy({ where: { userId }, transaction });
    },

    findToken: (filterObject) => Token.findOne({ where: filterObject }),
};
