const router = require('express').Router();

const authRouter = require('./auth.router');
const specialRouter = require('./special.router');
const userRouter = require('./user.router');

router.use('/auth', authRouter);
router.use('/special', specialRouter);
router.use('/users', userRouter);

module.exports = router;
