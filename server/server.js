const config = require('./../config/config')
const app = require('./express')


app.listen(config.port,() => console.log('listen on port ' + config.port))