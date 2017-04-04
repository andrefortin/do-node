// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Booking = require('../models/booking');
var Company = require('../models/company');
var Service = require('../models/service');
var User = require('../models/user');

// Routes
Booking.methods(['get', 'put', 'post', 'delete']);
Booking.register(router, '/booking');
Company.methods(['get', 'put', 'post', 'delete']);
Company.register(router, '/company');
Service.methods(['get', 'put', 'post', 'delete']);
Service.register(router, '/service');
User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/booking');

// Return router
module.exports = router;
