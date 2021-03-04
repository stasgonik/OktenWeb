const Joi = require('joi');

module.exports = Joi.object({
    area: Joi.number()
        .min(4)
        .max(10000)
        .optional(),
    price: Joi.number()
        .integer()
        .min(1)
        .optional(),
    year_builded: Joi.number().integer().optional(),
    year_selled: Joi.number().integer().optional(),
    _address: Joi.string()
        .alphanum()
        .min(24)
        .max(24)
        .optional()
});
