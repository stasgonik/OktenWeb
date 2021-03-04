const router = require('express').Router();

const { userController } = require('../controller');
const { authMiddleware, userMiddleware } = require('../middleware');

router.get('/', authMiddleware.checkAccessToken,
    userMiddleware.isSearchQueryValid,
    userMiddleware.isUserSearchResultExist,
    userController.getUsers);

router.post('/', userMiddleware.isUserValid, userMiddleware.isUserAlreadyExist, userController.createUser);

router.use('/:userId',
    authMiddleware.checkAccessToken,
    userMiddleware.isIdValid,
    userMiddleware.accessRightsCheck);

router.get('/:userId', userController.getSingleUser);

router.delete('/:userId', userController.deleteSingleUser);

module.exports = router;
