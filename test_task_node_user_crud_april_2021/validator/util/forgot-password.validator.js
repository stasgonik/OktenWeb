const Joi = require('joi');

const { regexEnum } = require('../../constant');

module.exports = Joi.object({
    email: Joi.string().regex(regexEnum.EMAIL_REGEXP).required(),
    old_password: Joi.string().regex(regexEnum.PASSWORD_REGEXP).required(),
    new_password: Joi.string().regex(regexEnum.PASSWORD_REGEXP).required(),
});
