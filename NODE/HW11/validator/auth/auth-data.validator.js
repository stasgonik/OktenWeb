const Joi = require('joi');

const { regexEnum } = require('../../constant');

module.exports = Joi.object({
    email: Joi.string().regex(regexEnum.EMAIL_REGEXP).required(),
    password: Joi.string().regex(regexEnum.PASSWORD_REGEXP).required()
});
