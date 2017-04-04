// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;
mongoose.Promise = require('bluebird');

// Schema
var serviceSchema = new mongoose.Schema({
    enabled: Boolean,
    date_created: Date,
    type: String,
    category_id: String,
    name: String,
    description: String,
    options: [
        {
            enabled: Boolean,
            id: String,
            name: String,
            description: String,
            price_unit: Number,
            price_fixed: Number,
            qty_min: Number,
            qty_max: Number
        }
    ],
    price_unit: Number,
    price_fixed: Number,
    qty_min: Number,
    qty_max: Number
});

// Return model
module.exports = restful.model('Service', serviceSchema);
