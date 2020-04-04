const gisService = require('../gisService');
const addPolygonController = (req , res) => {
    geojsonObject = req.body
    let err ;
    result = gisService.addPolygonService(geojsonObject , err);
    
    if(err){
        obj = {
            "errors" : err.message
        }
        res.status(err.statusCode);
        res.send(obj);
    }
    else{
        res.send(result);
        
    }

}
module.exports = addPolygonController