const Joi = require('joi');

module.exports = Joi.object({
    country: Joi.string()
        .alphanum()
        .min(2)
        .max(100)
        .required(),
    
    region: Joi.string()
        .alphanum()
        .min(2)
        .max(100)
        .required(),
    
    town: Joi.string()
        .alphanum()
        .min(2)
        .max(100)
        .required(),
    
    street: Joi.string()
        .alphanum()
        .min(2)
        .max(100)
        .required(),
    
    number: Joi.number().integer().min(0).required()
});
