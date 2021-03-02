const router = require('express').Router();

const { userController } = require('../controller');
const { userMiddleware } = require('../middleware');

router.get('/', userMiddleware.isSearchQueryValid, userMiddleware.isUserSearchResultExist, userController.getUsers);

router.post('/', userMiddleware.isUserValid, userController.createUser);

router.get('/:userId', userMiddleware.isIdValid, userMiddleware.isUserExist, userController.getSingleUser);

router.delete('/:userId', userMiddleware.isIdValid, userController.deleteSingleUser);

module.exports = router;
