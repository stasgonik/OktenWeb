const { authService, userService } = require('../service');
const { statusCodeEnum: statusCode } = require('../constant');
const { successMessage } = require('../message');
const { passwordHasher } = require('../helper');

module.exports = {
    getUsers: async (req, res) => {
        try {
            const filter = req.query;

            delete filter.preferL;

            const users = await userService.findUsers(filter);

            res.status(statusCode.OK).json(users);
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    createUser: async (req, res) => {
        try {
            const { preferL = 'en' } = req.query;
            const { password } = req.body;

            const hashPassword = await passwordHasher.hash(password);

            await userService.createUser({ ...req.body, password: hashPassword });

            res.status(statusCode.CREATED).json(successMessage.USER_CREATED[preferL]);
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    getSingleUser: async (req, res) => {
        try {
            const { userId } = req.params;

            const user = await userService.findUserById(userId);

            res.status(statusCode.OK).json(user);
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    deleteSingleUser: async (req, res) => {
        try {
            const { preferL = 'en' } = req.query;
            const { userId } = req.params;

            await authService.deleteAllUserTokens(req.user._id);

            await userService.deleteUser(userId);

            res.status(statusCode.OK).json(successMessage.USER_DELETED[preferL]);
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },
};
