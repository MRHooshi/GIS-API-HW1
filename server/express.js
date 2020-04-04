const express = require('express')
const gisRoutes = require('./gis/gisRoutes')
const bodyParser = require('body-parser')
const httpLog = require('./middlewares/loggerMiddleware')
const app = express()


//set http Loger
app.use(httpLog);
//middleware
app.use(bodyParser.json());

//mount route endpoints
app.use('/gis',gisRoutes);

module.exports = app