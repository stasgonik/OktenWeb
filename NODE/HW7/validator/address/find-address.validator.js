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

    number: Joi.number().integer().min(0).optional()
});
