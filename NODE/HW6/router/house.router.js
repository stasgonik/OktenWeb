const router = require('express').Router();

const { houseController } = require('../controller');
const { authMiddleware, houseMiddleware } = require('../middleware');

router.get('/', authMiddleware.checkAccessToken,
    houseMiddleware.isSearchQueryValid,
    houseController.getHouses);

router.post('/', houseMiddleware.isHouseValid, houseController.createHouse);

router.get('/:houseId', authMiddleware.checkAccessToken,
    houseMiddleware.isIdValid,
    houseMiddleware.isHouseExist,
    houseController.getSingleHouse);

router.delete('/:houseId', authMiddleware.checkAccessToken,
    houseMiddleware.isIdValid,
    houseMiddleware.isHouseExist,
    houseController.deleteSingleHouse);

module.exports = router;
