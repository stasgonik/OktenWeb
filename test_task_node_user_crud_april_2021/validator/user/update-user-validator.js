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
    password: Joi.string().regex(regexEnum.PASSWORD_REGEXP).optional(),
    age: Joi.number()
        .integer()
        .min(6)
        .max(160)
        .optional(),

    gender: Joi.string()
        .alphanum()
        .allow('male', 'female', 'other')
        .optional(),
});
