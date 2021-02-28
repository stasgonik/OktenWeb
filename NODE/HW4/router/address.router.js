const router = require('express').Router();

const addressController = require('../controller/address.controller');
const addressMiddleware = require('../middleware/address.middleware');

router.get('/', addressController.getAddresses);

router.post('/', addressMiddleware.isAddressValid, addressController.createAddress);

router.get('/:addressId', addressMiddleware.isIdValid, addressController.getSingleAddress);

router.delete('/:addressId', addressMiddleware.isIdValid, addressController.deleteSingleAddress);

module.exports = router;
