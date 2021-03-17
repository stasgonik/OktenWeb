const router = require('express').Router();

const { addressController } = require('../controller');
const { addressMiddleware, authMiddleware, fileMiddleware } = require('../middleware');

router.get('/',
    authMiddleware.checkAccessToken,
    addressMiddleware.isSearchQueryValid,
    addressController.getAddresses);

router.post('/', fileMiddleware.checkFiles, addressMiddleware.isAddressValid, addressController.createAddress);

router.use('/:addressId',
    authMiddleware.checkAccessToken,
    addressMiddleware.isAddressExist);

router.get('/:addressId', addressController.getSingleAddress);

router.delete('/:addressId', addressController.deleteSingleAddress);

module.exports = router;
