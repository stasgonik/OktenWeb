const { emailActionEnum: emailAction, statusCodeEnum: statusCode } = require('../constant');
const { passwordHasher } = require('../helper');
const { sequelize } = require('../database');
const { authService, emailService } = require('../service');

module.exports = {
    authUser: async (req, res, next) => {
        const transaction = sequelize.transaction();
        try {
            const { body: { password }, user } = req;

            await passwordHasher.compare(password, user.password);

            const tokens = await authService.generateTokens(user, transaction);

            // Просто для пробы еще тут добавил, вообще так себе идея, ну ладно
            const date = new Date().toLocaleString();

            await emailService.sendMail(user.email, emailAction.ACCOUNT_ACCESSED, { name: user.first_name, date });

            transaction.commit();

            res.status(statusCode.OK).json(tokens);
        } catch (e) {
            transaction.rollback();
            next(e);
        }
    },

    generateNewTokenPair: async (req, res, next) => {
        const transaction = sequelize.transaction();
        try {
            const { oldTokens } = req;

            const tokens = await authService.refreshTokens(oldTokens, transaction);

            transaction.commit();

            res.status(statusCode.OK).json(tokens);
        } catch (e) {
            transaction.rollback();
            next(e);
        }
    }
};
