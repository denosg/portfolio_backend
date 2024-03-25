const express = require('express');
const cors = require('cors');
const path = require('path');

const api = require('./routes/api');

const app = express();

//cross origin
app.use(cors({
    origin: 'http://localhost:8000'
}));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json())
app.use('/v1', api)

module.exports = app