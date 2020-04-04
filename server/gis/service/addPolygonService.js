const DAL = require('../gisDAL');

const addPolygonService = (geojsonObject, err ) =>
{
    DAL.addPolygon(geojsonObject)
        .then( 
            //log 
        )
        .catch(
            e =>{
                err = {
                    statusCode : 500 ,
                    message : [e.message]
                }
            }
            //log the error
            
        )
    return DAL.polygonCollection
}

module.exports = addPolygonService