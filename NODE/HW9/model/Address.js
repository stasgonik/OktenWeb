const { Schema, model } = require('mongoose');

const { dataBaseSchemaEnum: { ADDRESS } } = require('../constant');

const addressSchema = new Schema({
    country: { type: String, required: true },
    region: { type: String, required: true },
    town: { type: String, required: true },
    street: { type: String, required: true },
    number: { type: Number, required: true },
    document: [{ type: String }],
}, { toObject: { virtuals: true }, toJSON: { virtuals: true } });

addressSchema.virtual('full_address').get(function() {
    return `${this.country}, ${this.region} region, ${this.town} town, ${this.street} street, ${this.number}`;
});

module.exports = model(ADDRESS, addressSchema);