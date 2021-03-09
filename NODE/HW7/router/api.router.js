const router = require('express').Router();

const addressRouter = require('./address.router');
const authRouter = require('./auth.router');
const houseRouter = require('./house.router');
const userRouter = require('./user.router');

router.use('/addresses', addressRouter);
router.use('/auth', authRouter);
router.use('/houses', houseRouter);
router.use('/users', userRouter);

module.exports = router;
