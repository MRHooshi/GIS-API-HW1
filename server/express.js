const express = require('express')
const gisRoutes = require('./gis/gisRoutes')
const bodyParser = require('body-parser')
const app = express()


//middleware
app.use(bodyParser.json())

//mount route endpoints
app.use('/gis',gisRoutes);

module.exports = app