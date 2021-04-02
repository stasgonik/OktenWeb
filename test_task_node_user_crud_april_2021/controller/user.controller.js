const {
    dataBaseSchemaEnum,
    emailActionEnum: emailAction,
    itemTypeEnum,
    statusCodeEnum: statusCode
} = require('../constant');
const { sequelize } = require('../database');
const { activation_tokenizer, passwordHasher } = require('../helper');
const { successMessage } = require('../message');
const {
    authService,
    emailService,
    fileService,
    userService
} = require('../service');

module.exports = {
    activateAccount: async (req, res, next) => {
        const transaction = await sequelize.transaction();
        try {
            const { query: { preferL = 'en' }, user } = req;

            await userService.updateOne(user.id, { activation_token: null, activation_status: true }, transaction);

            await emailService.sendMail(user.email, emailAction.ACCOUNT_ACTIVATED, { name: user.first_name });

            transaction.commit();

            res.status(statusCode.OK).json(successMessage.USER_ACTIVATED[preferL]);
        } catch (e) {
            transaction.rollback();
            next(e);
        }
    },

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
        const transaction = await sequelize.transaction();
        try {
            const { avatar, body: { email, first_name, password }, query: { preferL = 'en' } } = req;

            const hashPassword = await passwordHasher.hash(password);
            const activation_token = await activation_tokenizer();

            const user = await userService.createUser({ ...req.body, password: hashPassword, activation_token }, transaction);

            if (avatar) {
                await fileService.uploadFile(
                    avatar,
                    itemTypeEnum.AVATAR,
                    user.id,
                    dataBaseSchemaEnum.USER,
                    userService,
                    transaction
                );
            }

            await emailService.sendMail(email, emailAction.ACCOUNT_CREATED, { name: first_name, token: activation_token });

            transaction.commit();

            res.status(statusCode.CREATED).json(successMessage.USER_CREATED[preferL]);
        } catch (e) {
            transaction.rollback();
            next(e);
        }
    },

    getSingleUser: async (req, res, next) => {
        try {
            const { params: { userId } } = req;

            const user = await userService.findUserById(userId);

            res.status(statusCode.OK).json(user);
        } catch (e) {
            next(e);
        }
    },

    deleteSingleUser: async (req, res, next) => {
        const transaction = await sequelize.transaction();
        try {
            const { params: { userId }, query: { preferL = 'en' }, user: { email, first_name } } = req;

            await authService.deleteAllUserTokens(userId, transaction);

            await fileService.deleteUserFiles(userId, dataBaseSchemaEnum.USER);

            await userService.deleteUser(userId, transaction);

            await emailService.sendMail(email, emailAction.ACCOUNT_DELETED, { name: first_name });

            transaction.commit();

            res.status(statusCode.OK).json(successMessage.USER_DELETED[preferL]);
        } catch (e) {
            transaction.rollback();
            next(e);
        }
    },

    updateUser: async (req, res, next) => {
        const transaction = await sequelize.transaction();
        try {
            const { avatar, params: { userId }, query: { preferL = 'en' } } = req;

            const updateObject = req.body;

            if (updateObject.password) {
                updateObject.password = await passwordHasher.hash(updateObject.password);
            }

            await userService.updateOne(userId, updateObject, transaction);

            if (avatar) {
                await fileService.deleteUserFiles(+userId, dataBaseSchemaEnum.USER);
                await fileService.uploadFile(
                    avatar,
                    itemTypeEnum.AVATAR,
                    +userId,
                    dataBaseSchemaEnum.USER,
                    userService,
                    transaction
                );
            }

            const { email, first_name } = await userService.findUserById(userId);

            const date = new Date().toLocaleString();

            await emailService.sendMail(email, emailAction.ACCOUNT_INFO_UPDATED, { name: first_name, date });

            transaction.commit();

            res.status(statusCode.OK).json(successMessage.USER_UPDATED[preferL]);
        } catch (e) {
            transaction.rollback();
            next(e);
        }
    },

    forgotPassword: async (req, res, next) => {
        const transaction = await sequelize.transaction();
        try {
            const { body: { email, new_password }, user } = req;

            const new_hash = await passwordHasher.hash(new_password);

            await userService.updateOne(user.id, { password: new_hash }, transaction);

            await emailService.sendMail(email, emailAction.ACCOUNT_INFO_UPDATED, { name: user.first_name });

            transaction.commit();

            res.status(statusCode.OK).json(successMessage.USER_UPDATED.en);
        } catch (e) {
            transaction.rollback();
            next(e);
        }
    },
};
