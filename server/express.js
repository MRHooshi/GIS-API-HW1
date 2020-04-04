const express = require('express')
const gisRoutes = require('./gis/gisRoutes')
const bodyParser = require('body-parser')
const httpLog = require('./middlewares/loggerMiddleware')
const notFound = require('./middlewares/notFound')
const app = express()


//set http Loger
app.use(httpLog);
//middleware
app.use(bodyParser.json());

//mount route endpoints
app.use('/gis',gisRoutes);

//404 not found
app.use(notFound)
module.exports = app