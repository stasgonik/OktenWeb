const userService = require('../service/user.service');
const statusCode = require('../constant/statusCode.enum');
const successMessage = require('../message/success.message');

module.exports = {
    getUsers: async (req, res) => {
        try {
            /*
             не придумал как исключить preferL от req.query и отправить их раздельно,
              так что временно передаю через req.body несмотря на отсутствие такого у GET
            */
            const { preferL = 'en' } = req.body;
            const users = await userService.findUsers(req.query, preferL);

            res.status(statusCode.OK).json(users);
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    createUser: async (req, res) => {
        try {
            const { preferL = 'en' } = req.query;

            await userService.createUser(req.body);

            res.status(statusCode.CREATED).json(successMessage.USER_CREATED[preferL]);
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    getSingleUser: async (req, res) => {
        try {
            const { userId } = req.params;
            const { preferL = 'en' } = req.query;

            const user = await userService.findUserById(userId, preferL);

            res.status(statusCode.OK).json(user);
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    deleteSingleUser: async (req, res) => {
        try {
            const { preferL = 'en' } = req.query;
            const { userId } = req.params;

            await userService.deleteUser(userId);

            res.status(statusCode.OK).json(successMessage.USER_DELETED[preferL]);
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },
};
