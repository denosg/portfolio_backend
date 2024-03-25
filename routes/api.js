const express = require('express');

const downloadsRouter = require('./downloads/downloads.router');

const api = express.Router();

api.use('/downloads', downloadsRouter)

module.exports = api