const { statusCodeEnum: statusCode } = require('../constant');
const { sequelize } = require('../database');
const { passwordHasher } = require('../helper');
const { authService } = require('../service');

module.exports = {
    authUser: async (req, res, next) => {
        const transaction = await sequelize.transaction();
        try {
            const { body: { password }, user } = req;

            await passwordHasher.compare(password, user.password);

            const tokens = await authService.generateTokens(user, transaction);

            transaction.commit();

            res.status(statusCode.OK).json(tokens);
        } catch (e) {
            transaction.rollback();
            next(e);
        }
    },

    generateNewTokenPair: async (req, res, next) => {
        const transaction = await sequelize.transaction();
        try {
            const { oldTokens, role } = req;

            const tokens = await authService.refreshTokens(oldTokens, role, transaction);

            transaction.commit();

            res.status(statusCode.OK).json(tokens);
        } catch (e) {
            transaction.rollback();
            next(e);
        }
    }
};
