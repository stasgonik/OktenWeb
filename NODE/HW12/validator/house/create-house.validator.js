const Joi = require('joi');

module.exports = Joi.object({
    area: Joi.number()
        .min(4)
        .max(10000)
        .required(),

    price: Joi.number()
        .integer()
        .min(1)
        .required(),

    year_builded: Joi.number().integer().required(),
    year_selled: Joi.number().integer().required(),
});
