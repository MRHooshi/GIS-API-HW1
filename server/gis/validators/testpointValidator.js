const {query , validationResult } = require('express-validator')
const validatorRules = () => {

    return [
    //validate latitude query parameter
    query('lat','latitude must exist').exists(),
    query('lat','latitude must not empty ').notEmpty(),
    

    //validate long query parameter
    query('long','latitude must exist').exists(),
    query('long','long must not empty').notEmpty()
    ]
}

const validate = (req, res, next) => {
    const errors = validationResult(req)
    
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
    return res.status(422).json({
      errors: extractedErrors,
    })
}

module.exports = {validatorRules , validate}