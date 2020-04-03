const geojsonValidation = require('geojson-validation')
const { body , validationResult } = require('express-validator');

const validatorRules = () => {
    return [
        body().custom(value => {
            if(!geojsonValidation.isFeature(value)){
                throw new Error( 'is not valid polygon');
            }
            if(!geojsonValidation.isPolygon(value.geometry)){
                throw new Error('The value must be polygon');
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
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
    return res.status(400).json({
      errors: extractedErrors,
    })
}

module.exports = {
    validatorRules,
    validate
}