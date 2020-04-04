
const logger = require('../../logger/logger');

const httpLog = (req , res , next) => {
    logger.info(req.method + " " + req.path + " ")
    next()
}

module.exports = httpLog