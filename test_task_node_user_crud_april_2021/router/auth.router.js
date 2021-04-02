const router = require('express').Router();

const { authController } = require('../controller');
const { authMiddleware, userMiddleware } = require('../middleware');

router.post('/',
    authMiddleware.isAuthDataValid,
    authMiddleware.isAuthUserExist,
    userMiddleware.isAccountActivated,
    authController.authUser);

router.post('/refresh', authMiddleware.checkRefreshToken, authController.generateNewTokenPair);

module.exports = router;
