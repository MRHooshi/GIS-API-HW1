const {query , validationResult } = require('express-validator')
const logger = require('../../../logger/logger');
const validatorRules = () => {

    return [
    //validate latitude query parameter
    query('lat','Invalid lat query parameter').notEmpty(),
    
    //validate long query parameter
    query('long','Invalid long query parameter').notEmpty()
    ]
}

const validate = (req, res, next) => {
    const errors = validationResult(req)
    
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err =>
      {
        logger.error('validation error : ' + req.path);
        return extractedErrors.push({ [err.param]: err.msg })
      })
    return res.status(400).json({
      errors: extractedErrors,
    })
}

module.exports = {validatorRules , validate}