const router = require('express').Router();

const userController = require('../controller/user.controller');
const userMiddleware = require('../middleware/user.middleware');

router.get('/', userMiddleware.isUserSearchResultExist, userController.getUsers);

router.post('/', userMiddleware.isUserValid, userController.createUser);

router.get('/:userId', userMiddleware.isIdValid, userMiddleware.isUserExist, userController.getSingleUser);

router.delete('/:userId', userMiddleware.isIdValid, userController.deleteSingleUser);

module.exports = router;
