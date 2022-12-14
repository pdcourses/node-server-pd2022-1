const express = require('express');
const {validate, errorHandlers} = require('./middleware');
const router = require('./router');

const app = express();

// json data
app.use(express.json());

//static
app.use(express.static('public'));

//errors
app.use(errorHandlers.validationEH, errorHandlers.internalServerEH);

app.use('/api', router);

module.exports = app;