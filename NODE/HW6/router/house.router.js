const router = require('express').Router();

const { houseController } = require('../controller');
const { authMiddleware, houseMiddleware } = require('../middleware');

router.get('/', authMiddleware.checkAccessToken,
    houseMiddleware.isSearchQueryValid,
    houseMiddleware.isHouseSearchResultExist,
    houseController.getHouses);

router.post('/', houseMiddleware.isHouseValid, houseController.createHouse);

router.use('/:houseId',
    authMiddleware.checkAccessToken,
    houseMiddleware.isIdValid,
    houseMiddleware.isHouseExist);

router.get('/:houseId', houseController.getSingleHouse);

router.delete('/:houseId', houseController.deleteSingleHouse);

module.exports = router;
