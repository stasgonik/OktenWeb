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
            const { avatar, body: { email, password }, query: { preferL = 'en' } } = req;

            const hashPassword = await passwordHasher.hash(password);

            const user = await userService.createUser({ ...req.body, password: hashPassword });

            if (avatar) {
                console.log(avatar);
                await fileService.uploadFile(avatar, itemTypeEnum.AVATAR, user._id, dataBaseSchemaEnum.USER, userService);
            }

            const { full_name } = await userService.findOneUser({ email });

            await emailService.sendMail(email, emailAction.ACCOUNT_CREATED, { name: full_name });

            res.status(statusCode.CREATED).json(successMessage.USER_CREATED[preferL]);
        } catch (e) {
            next(e);
        }
    },

    getSingleUser: async (req, res, next) => {
        try {
            const { params: { userId }, user: { email, full_name } } = req;

            const user = await userService.findUserById(userId);
            const date = new Date().toLocaleString();

            await emailService.sendMail(email, emailAction.ACCOUNT_INFO_ACCESSED, { name: full_name, date });

            res.status(statusCode.OK).json(user);
        } catch (e) {
            next(e);
        }
    },

    deleteSingleUser: async (req, res, next) => {
        try {
            const { params: { userId }, query: { preferL = 'en' }, user: { _id, email, full_name } } = req;

            await authService.deleteAllUserTokens(_id);

            await userService.deleteUser(userId);

            await fileService.deleteUserFiles(_id, dataBaseSchemaEnum.USER);

            await emailService.sendMail(email, emailAction.ACCOUNT_DELETED, { name: full_name });

            res.status(statusCode.OK).json(successMessage.USER_DELETED[preferL]);
        } catch (e) {
            next(e);
        }
    },
};
