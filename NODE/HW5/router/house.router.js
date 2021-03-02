const router = require('express').Router();

const { houseController } = require('../controller');
const { houseMiddleware } = require('../middleware');

router.get('/', houseMiddleware.isSearchQueryValid, houseMiddleware.isHouseSearchResultExist, houseController.getHouses);

router.post('/', houseMiddleware.isHouseValid, houseController.createHouse);

router.get('/:houseId', houseMiddleware.isIdValid, houseMiddleware.isHouseExist, houseController.getSingleHouse);

router.delete('/:houseId', houseMiddleware.isIdValid, houseController.deleteSingleHouse);

module.exports = router;
