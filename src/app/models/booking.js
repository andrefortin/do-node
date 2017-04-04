// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;
mongoose.Promise = require('bluebird');

// Schema
var bookingSchema = new mongoose.Schema({
    date_created: Date,
    company_id: String,
    user_id: String,
    sms: String,
    is_paid: Boolean,
    address:
    {
        street: String,
        city: String,
        prov: String,
        postal: String
    },
    service: {
        id: String,
        name: String,
        description: String,
        type: String,
        options: [
            {
                name: String,
                description: String
            }
        ],
        qty: Number,
        price: Number,
    },
    activity_log: [
        {
            date: Date,
            status: String
        }
    ],
    notes: String
});

// Return model
module.exports = restful.model('Booking', bookingSchema);
