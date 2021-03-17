const { Token } = require('../database/model');
const { tokenizer } = require('../helper');

module.exports = {
    generateTokens: async (user) => {
        const tokens = tokenizer();

        await Token.create({ ...tokens, userId: user.id });

        return tokens;
    },

    refreshTokens: async (oldTokens) => {
        const tokens = tokenizer();

        await Token.findOne({
            where: { id: oldTokens.id }
        })
            .then((record) => {
                record.update({
                    ...tokens
                });
            });

        return tokens;
    },

    deleteAllUserTokens: async (userId) => {
        await Token.destroy({ where: { userId } });
    },

    findToken: (filterObject) => Token.findOne({ where: filterObject }),
};
