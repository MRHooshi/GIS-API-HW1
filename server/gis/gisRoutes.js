const express =  require('express')
const pointValidator = require('./validators/testpointValidator')
const addPolygonValidator = require('./validators/addPolygonValidator')
const router = express.Router()

router.get('/testpoint',
        pointValidator.validatorRules() ,
        pointValidator.validate ,
        (req , res) => {
                res.send("OK");
                }
        )

router.put('/addpolygon',
        addPolygonValidator.validatorRules(),
        addPolygonValidator.validate,
        (req , res) => {
            res.send("OK");
        })


module.exports = router