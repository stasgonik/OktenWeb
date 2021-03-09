const Joi = require('joi');

const { regexEnum } = require('../../constant');

module.exports = Joi.object({
    first_name: Joi.string()
        .alphanum()
        .min(2)
        .max(50)
        .required(),

    last_name: Joi.string()
        .alphanum()
        .min(2)
        .max(50)
        .required(),

    email: Joi.string().regex(regexEnum.EMAIL_REGEXP).required(),
    password: Joi.string().regex(regexEnum.PASSWORD_REGEXP).required(),
    age: Joi.number()
        .integer()
        .min(6)
        .max(160)
        .required(),

    gender: Joi.string().alphanum().optional(),
    _houses: Joi.string()
        .alphanum()
        .min(24)
        .max(24)
        .optional()
});
