const geojsonValidation = require('geojson-validation')
const { body , validationResult } = require('express-validator');
const logger = require('../../../logger/logger');

const validatorRules = () => {
    return [
        body().custom(value => {
            if(!geojsonValidation.isFeature(value)){
                let err = new Error( 'is not valid Feature')
                throw err;
            }
            if(!geojsonValidation.isPolygon(value.geometry)){
                let err = new Error( 'is not valid Polygon')
                throw err;
            }
            return true;
        })
    ]
}


const validate = (req, res, next) => {
    const errors = validationResult(req)
    
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err =>{
        logger.error('validation error : ' + req.path);
        return extractedErrors.push({ [err.param] : err.msg })
    } )
  
    
    return res.status(400).json({
      errors: extractedErrors,
    })
}

module.exports = {
    validatorRules,
    validate
}