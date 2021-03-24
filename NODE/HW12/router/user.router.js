const router = require('express').Router();

const { roleEnum } = require('../constant');
const { userController } = require('../controller');
const { authMiddleware, fileMiddleware, userMiddleware } = require('../middleware');

router.get('/',
    authMiddleware.checkAccessToken,
    userMiddleware.accessRightsCheck([roleEnum.admin]),
    userMiddleware.isSearchQueryValid,
    userController.getUsers);

router.post('/',
    userMiddleware.isUserValid,
    userMiddleware.isUserAlreadyExist,
    fileMiddleware.checkFiles,
    fileMiddleware.checkAvatar,
    userController.createUser);

// router.use('/:userId',
//     authMiddleware.checkAccessToken,
//     userMiddleware.accessRightsCheck([roleEnum.admin]));

router.use('/:userId',
    authMiddleware.checkAccessToken);

router.get('/:userId', userController.getSingleUser);

router.delete('/:userId', userMiddleware.accessRightsCheck([roleEnum.admin]), userController.deleteSingleUser);

module.exports = router;
