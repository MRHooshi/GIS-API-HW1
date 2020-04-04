const express =  require('express')
const pointValidator = require('./validators/testpointValidator')
const addPolygonValidator = require('./validators/addpolygonValidator')
const gisController = require('./gisController')
const router = express.Router()

router.get('/testpoint',
        pointValidator.validatorRules() ,
        pointValidator.validate ,
        gisController.testpointController
        )

router.put('/addpolygon',
        addPolygonValidator.validatorRules(),
        addPolygonValidator.validate,
        gisController.addPolygonController
)


module.exports = router