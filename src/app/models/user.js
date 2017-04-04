// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;
mongoose.Promise = require('bluebird');

// Schema
var userSchema = new mongoose.Schema({
    enabled: Boolean,
    date_created: Date,
    company_id: String,
    user_name: String,
    age: Number,
    gender: String,
    contact: {
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
            icon_url: String,
            name: String,
            address: String,
            city: String,
            province: String,
            postal: String,
            coords: {lat: String, long: String}
        }
    ]
});

// Return model
module.exports = restful.model('User', userSchema);
