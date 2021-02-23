const router = require('express').Router();

const userController = require('../controller/user.controller');
const userMiddleware = require('../middleware/user.middleware');

router.get('/', userController.getAllUsers);

router.post('/', userMiddleware.isUsernameValid, userMiddleware.isPasswordValid, userController.createUser);

router.get('/:userId', userMiddleware.isIdValid, userController.getSingleUser);

router.delete('/:userId', userMiddleware.isIdValid, userController.deleteSingleUser);

router.get('/findUser/:username', userMiddleware.isUsernameValid, userController.getUserByUsername);

module.exports = router;
