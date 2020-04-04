
const gisService = require('../gisService')

const tespointController = (req , res) => {
    let err;
    polygonNames = gisService.testpointService([req.query.long,req.query.lat] , err);
    
    
    if(err){
        obj = {
            "errors" : err.message
        }
        res.status(err.statusCode);
        res.send(obj)
    }
    else{
        res.send(polygonNames);
        
    }
        
}

module.exports = tespointController