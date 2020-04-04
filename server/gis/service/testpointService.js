const turf = require('@turf/turf');
const DAL = require('../gisDAL');

const testpointService = (cordinations) => {
    
    geojsonPoint = turf.point(cordinations); 
    polygons = DAL.filter(turf.inside , geojsonPoint);
    return polygons.map(polygon => polygon.properties.name);

}
module.exports = testpointService