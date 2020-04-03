const express =  require('express')
const router = express.Router()

router.get('/testpoint',
        (req , res) => {
                res.send("OK");
                }
        )

router.put('/addpolygon',
        (req , res) =>{
            res.send("OK");
        })


module.exports = router