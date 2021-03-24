const Joi = require('joi');

module.exports = Joi.object({
    area: Joi.number()
        .min(4)
        .max(10000)
        .optional()
        .when('area_GTE', ({ is: Joi.exist(), then: Joi.forbidden() }))
        .when('area_LTE', ({ is: Joi.exist(), then: Joi.forbidden() })),

    area_GTE: Joi.number()
        .min(4)
        .max(10000)
        .optional(),

    area_LTE: Joi.number()
        .min(4)
        .max(10000)
        .optional(),

    price: Joi.number()
        .integer()
        .min(1)
        .optional()
        .when('price_GTE', ({ is: Joi.exist(), then: Joi.forbidden() }))
        .when('price_LTE', ({ is: Joi.exist(), then: Joi.forbidden() })),

    price_GTE: Joi.number()
        .integer()
        .min(1)
        .optional(),

    price_LTE: Joi.number()
        .integer()
        .min(1)
        .optional(),

    year_builded: Joi.number()
        .integer()
        .optional()
        .when('year_builded_GTE', ({ is: Joi.exist(), then: Joi.forbidden() }))
        .when('year_builded_LTE', ({ is: Joi.exist(), then: Joi.forbidden() })),

    year_builded_GTE: Joi.number().integer().optional(),
    year_builded_LTE: Joi.number().integer().optional(),

    year_selled: Joi.number()
        .integer()
        .optional()
        .when('year_selled_GTE', ({ is: Joi.exist(), then: Joi.forbidden() }))
        .when('year_selled_LTE', ({ is: Joi.exist(), then: Joi.forbidden() })),

    year_selled_GTE: Joi.number().integer().optional(),
    year_selled_LTE: Joi.number().integer().optional(),

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
