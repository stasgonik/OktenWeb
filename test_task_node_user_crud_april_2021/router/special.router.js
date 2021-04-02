const router = require('express').Router();

const { userController } = require('../controller');
const { authMiddleware, userMiddleware } = require('../middleware');

router.get('/activateAccount', authMiddleware.checkActivationToken, userController.activateAccount);

router.patch('/forgotPassword', userMiddleware.isForgotPasswordValid, userController.forgotPassword);

module.exports = router;
