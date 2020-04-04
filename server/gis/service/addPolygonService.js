const DAL = require('../gisDAL');
const logger = require('../../../logger/logger');
const addPolygonService = (geojsonObject, err ) =>
{
    DAL.addPolygon(geojsonObject)
        .then( 
            logger.info("Write complete successfully " + geojsonObject) 
        )
        .catch(
            e =>{

                logger.error('error in writing data ' + e )
                return err = {
                    statusCode : 500 ,
                    message : [e.message]
                }
            }
            
            
        )
    return DAL.polygonCollection()
}

module.exports = addPolygonService