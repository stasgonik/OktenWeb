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

    age_GTE: Joi.number()
        .integer()
        .min(6)
        .max(160)
        .optional(),

    age_LTE: Joi.number()
        .integer()
        .min(6)
        .max(160)
        .optional(),

    gender: Joi.string()
        .alphanum()
        .allow('male', 'female', 'other')
        .optional(),

    full_name: Joi.string()
        .alphanum()
        .min(2)
        .max(101)
        .optional(),

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
