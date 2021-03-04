const router = require('express').Router();

const { addressController } = require('../controller');
const { addressMiddleware, authMiddleware } = require('../middleware');

router.get('/', authMiddleware.checkAccessToken,
    addressMiddleware.isSearchQueryValid,
    addressMiddleware.isAddressSearchResultExist,
    addressController.getAddresses);

router.post('/', addressMiddleware.isAddressValid, addressController.createAddress);

router.use('/:addressId',
    authMiddleware.checkAccessToken,
    addressMiddleware.isIdValid,
    addressMiddleware.isAddressExist);

router.get('/:addressId', addressController.getSingleAddress);

router.delete('/:addressId', addressController.deleteSingleAddress);

module.exports = router;
