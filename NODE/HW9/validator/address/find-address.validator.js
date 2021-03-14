const Joi = require('joi');

module.exports = Joi.object({
    country: Joi.string()
        .alphanum()
        .min(2)
        .max(100)
        .optional(),

    region: Joi.string()
        .alphanum()
        .min(2)
        .max(100)
        .optional(),

    town: Joi.string()
        .alphanum()
        .min(2)
        .max(100)
        .optional(),

    street: Joi.string()
        .alphanum()
        .min(2)
        .max(100)
        .optional(),

    number: Joi.number().integer().min(1).optional(),
    number_GTE: Joi.number().integer().min(1).optional(),
    number_LTE: Joi.number().integer().min(1).optional(),

    limit: Joi.number()
        .integer()
        .min(2)
        .max(100)
        .optional(),

    page: Joi.number()
        .integer()
        .min(1)
        .optional(),

    sortBy: Joi.string()
        .alphanum()
        .min(1)
        .max(50)
        .optional(),

    order: Joi.string()
        .alphanum()
        .min(2)
        .max(4)
        .optional(),
});
