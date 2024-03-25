const express = require('express');

const { httpGetDownloadPdf } = require('./downloads.controller')

const downloadsRouter = express.Router();

downloadsRouter.get('/pdf', httpGetDownloadPdf)

module.exports = downloadsRouter