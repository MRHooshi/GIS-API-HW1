const express =  require('express')
const pointValidator = require('./validators/testpointValidator')
const router = express.Router()

router.get('/testpoint',
        pointValidator.validatorRules() ,
        pointValidator.validate ,
        (req , res) => {
                res.send("OK");
                }
        )

router.put('/addpolygon',
        (req , res) =>{
            res.send("OK");
        })


module.exports = router