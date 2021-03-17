const {
    dataBaseSchemaEnum,
    emailActionEnum: emailAction,
    itemTypeEnum,
    statusCodeEnum: statusCode
} = require('../constant');
const { passwordHasher } = require('../helper');
const { successMessage } = require('../message');
const {
    authService,
    emailService,
    fileService,
    userService
} = require('../service');

module.exports = {
    getUsers: async (req, res, next) => {
        try {
            const filter = req.query;

            delete filter.preferL;

            const users = await userService.findUsers(filter);

            res.status(statusCode.OK).json(users);
        } catch (e) {
            next(e);
        }
    },

    createUser: async (req, res, next) => {
        try {
            const { avatar, body: { email, first_name, password }, query: { preferL = 'en' } } = req;

            const hashPassword = await passwordHasher.hash(password);

            const user = await userService.createUser({ ...req.body, password: hashPassword });

            if (avatar) {
                console.log(avatar);
                await fileService.uploadFileOwn(avatar, itemTypeEnum.AVATAR, user.id, dataBaseSchemaEnum.USER, userService);
            }

            await emailService.sendMail(email, emailAction.ACCOUNT_CREATED, { name: first_name });

            res.status(statusCode.CREATED).json(successMessage.USER_CREATED[preferL]);
        } catch (e) {
            next(e);
        }
    },

    getSingleUser: async (req, res, next) => {
        try {
            const { params: { userId }, user: { email, first_name } } = req;

            const user = await userService.findUserById(userId);
            const date = new Date().toLocaleString();

            await emailService.sendMail(email, emailAction.ACCOUNT_INFO_ACCESSED, { name: first_name, date });

            res.status(statusCode.OK).json(user);
        } catch (e) {
            next(e);
        }
    },

    deleteSingleUser: async (req, res, next) => {
        try {
            const { params: { userId }, query: { preferL = 'en' }, user: { email, first_name } } = req;

            await authService.deleteAllUserTokens(userId);

            await userService.deleteUser(userId);

            await fileService.deleteUserFiles(userId, dataBaseSchemaEnum.USER);

            await emailService.sendMail(email, emailAction.ACCOUNT_DELETED, { name: first_name });

            res.status(statusCode.OK).json(successMessage.USER_DELETED[preferL]);
        } catch (e) {
            next(e);
        }
    },
};
