// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://fw_noderest:fw_noderest@ds113580.mlab.com:13580/fw_noderest');
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
