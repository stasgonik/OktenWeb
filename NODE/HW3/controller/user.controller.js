const userService = require('../service/user.service');
const statusCode = require('../constant/statusCode.enum');
const successMessage = require("../message/success.message");

module.exports = {
    getUsers: async (req, res) => {
        try {
            const { preferL = 'en' } = req.body;

            const users = await userService.findUsers(preferL, req.query);

            res.status(statusCode.OK).json(users);
        } catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    getSingleUser: async (req, res) => {
        try {
            const { userId } = req.params;
            const { preferL = 'en' } = req.body;

            const user = await userService.findUserById(userId, preferL);

            res.status(statusCode.OK).json(user);
        }
        catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    createUser: async (req, res) => {
        try {
            const { username, password, preferL = 'en' } = req.body;
            const user = {username, password}

            await userService.createUser(user, preferL);

            res.status(statusCode.CREATED).json(successMessage.USER_CREATED[preferL]);
        }
        catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    deleteSingleUser: async (req, res) => {
        try {
            const { userId } = req.params;
            const { preferL = 'en' } = req.body;

            await userService.deleteUser(userId);

            res.status(statusCode.OK).json(successMessage.USER_DELETED[preferL]);
        }
        catch (e) {
            res.status(statusCode.BAD_REQUEST).json(e.message);
        }
    },

    // getUserByUsername: async (req, res) => {
    //     try {
    //         const { username } = req.params;
    //         const { preferL = 'en' } = req.body;

    //         const user = await userService.findUserByUsername(username, preferL);
    //
    //         res.status(statusCode.OK).json(user);
    //     }
    //     catch (e) {
    //         res.status(statusCode.BAD_REQUEST).json(e.message);
    //     }
    // },
}
