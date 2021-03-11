const Joi = require('joi');

const { regexEnum } = require('../../constant');

module.exports = Joi.object({
    first_name: Joi.string()
        .alphanum()
        .min(2)
        .max(50)
        .optional(),

    last_name: Joi.string()
        .alphanum()
        .min(2)
        .max(50)
        .optional(),

    email: Joi.string().regex(regexEnum.EMAIL_REGEXP).optional(),
    age: Joi.number()
        .integer()
        .min(6)
        .max(160)
        .optional(),

    gender: Joi.string().alphanum().optional(),
    _houses: Joi.string()
        .alphanum()
        .min(24)
        .max(24)
        .optional()
});
