const router = require('express').Router();

const { userController } = require('../controller');
const { authMiddleware, fileMiddleware, userMiddleware } = require('../middleware');

router.get('/',
    authMiddleware.checkAccessToken,
    userMiddleware.isSearchQueryValid,
    userController.getUsers);

router.post('/',
    userMiddleware.isUserValid,
    userMiddleware.isUserAlreadyExist,
    fileMiddleware.checkFiles,
    fileMiddleware.checkAvatar,
    userController.createUser);

router.use('/:userId',
    authMiddleware.checkAccessToken,
    userMiddleware.accessRightsCheck);

router.get('/:userId', userController.getSingleUser);

router.delete('/:userId', userController.deleteSingleUser);

router.patch('/:userId',
    fileMiddleware.checkFiles,
    fileMiddleware.checkAvatar,
    userMiddleware.isUpdateUserValid,
    userController.updateUser);

module.exports = router;
