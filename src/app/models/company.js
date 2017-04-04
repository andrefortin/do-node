// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;
mongoose.Promise = require('bluebird');

// Schema
var companySchema = new mongoose.Schema({
    enabled: Boolean,
    date_created: Date,
    company_name: String,
    logo_url: String,
    contact:
    {
        first_name: String,
        last_name: String,
        email: String,
        phone: String,
        sms: String
    },
    address:
    {
        street: String,
        city: String,
        prov: String,
        postal: String
    },
    locations: [
        {
            enabled: Boolean,
            street: String,
            city: String,
            prov: String,
            postal: String,
            name: String,
            geoip: String
        }
    ],
    employees: [
        {
            enabled: Boolean,
            name: String,
            sms: String
        }
    ],
    services: [
        {
            enabled: Boolean,
            name: String,
            description: String,
            price_unit: Number,
            price_fixed: Number,
            min_qty: Number,
            max_qty: Number
        }
    ]
});

// Return model
module.exports = restful.model('Company', companySchema);
