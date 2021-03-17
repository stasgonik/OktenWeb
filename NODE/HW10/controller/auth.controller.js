const { emailActionEnum: emailAction, statusCodeEnum: statusCode } = require('../constant');
const { passwordHasher } = require('../helper');
const { authService, emailService } = require('../service');

module.exports = {
    authUser: async (req, res, next) => {
        try {
            const { body: { password }, user } = req;

            await passwordHasher.compare(password, user.password);

            const tokens = await authService.generateTokens(user);

            // Просто для пробы еще тут добавил, вообще так себе идея, ну ладно
            const date = new Date().toLocaleString();

            await emailService.sendMail(user.email, emailAction.ACCOUNT_ACCESSED, { name: user.first_name, date });

            res.status(statusCode.OK).json(tokens);
        } catch (e) {
            next(e);
        }
    },

    generateNewTokenPair: async (req, res, next) => {
        try {
            const { oldTokens } = req;

            const tokens = await authService.refreshTokens(oldTokens);

            res.status(statusCode.OK).json(tokens);
        } catch (e) {
            next(e);
        }
    }
};
