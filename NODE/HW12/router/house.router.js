const router = require('express').Router();

const { houseController } = require('../controller');
const { authMiddleware, fileMiddleware, houseMiddleware } = require('../middleware');

router.get('/',
    authMiddleware.checkAccessToken,
    houseMiddleware.isSearchQueryValid,
    houseController.getHouses);

router.post('/', fileMiddleware.checkFiles, houseMiddleware.isHouseValid, houseController.createHouse);

router.use('/:houseId',
    authMiddleware.checkAccessToken,
    houseMiddleware.isHouseExist);

router.get('/:houseId', houseController.getSingleHouse);

router.delete('/:houseId', houseController.deleteSingleHouse);

module.exports = router;
