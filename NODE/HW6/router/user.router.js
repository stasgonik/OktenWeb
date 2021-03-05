const router = require('express').Router();

const { userController } = require('../controller');
const { authMiddleware, userMiddleware } = require('../middleware');

router.get('/', authMiddleware.checkAccessToken,
    userMiddleware.isSearchQueryValid,
    userController.getUsers);

router.post('/', userMiddleware.isUserValid, userMiddleware.isUserAlreadyExist, userController.createUser);

router.get('/:userId', authMiddleware.checkAccessToken,
    userMiddleware.isIdValid,
    userMiddleware.accessRightsCheck,
    userMiddleware.isUserExist,
    userController.getSingleUser);

router.delete('/:userId', authMiddleware.checkAccessToken,
    userMiddleware.isIdValid,
    userMiddleware.accessRightsCheck,
    userMiddleware.isUserExist,
    userController.deleteSingleUser);

module.exports = router;
