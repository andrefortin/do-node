// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://fw_booking_api:fw_booking_api_password@ds151070.mlab.com:51070/booking-cleaners');
mongoose.Promise = require('bluebird');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Load config
const port = 3000;

// Start server
app.listen(port);
console.log('Listening on port ' + port);
