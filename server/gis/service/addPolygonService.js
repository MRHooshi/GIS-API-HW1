const DAL = require('../gisDAL');

const addPolygonService = (geojsonObject, err ) =>
{
    DAL.addPolygon(geojsonObject)
        .then( 
            //log 
        )
        .catch(
            //log the error
            err => err.push({})
        )
    return DAL.polygonCollection
}

module.exports = addPolygonService