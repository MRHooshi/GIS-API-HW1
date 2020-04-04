const DAL = require('../gisDAL');

const addPolygonService = (geojsonObject) =>
{
    geojsonResult = DAL.addPolygon(geojsonObject)
    return geojsonResult;
}

module.exports = addPolygonService