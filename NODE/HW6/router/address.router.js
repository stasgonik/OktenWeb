const router = require('express').Router();

const { addressController } = require('../controller');
const { addressMiddleware, authMiddleware } = require('../middleware');

router.get('/', authMiddleware.checkAccessToken,
    addressMiddleware.isSearchQueryValid,
    addressController.getAddresses);

router.post('/', addressMiddleware.isAddressValid, addressController.createAddress);

router.get('/:addressId', authMiddleware.checkAccessToken,
    addressMiddleware.isIdValid,
    addressMiddleware.isAddressExist,
    addressController.getSingleAddress);

router.delete('/:addressId', authMiddleware.checkAccessToken,
    addressMiddleware.isIdValid,
    addressMiddleware.isAddressExist,
    addressController.deleteSingleAddress);

module.exports = router;
