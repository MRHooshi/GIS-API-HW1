const express = require('express')
const gisRoutes = require('./gis/gisRoutes')
const app = express()


//mount route endpoints
app.use('/gis',gisRoutes);

module.exports = app