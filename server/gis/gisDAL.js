const jsonfile = require('jsonfile')
const path = "./data.json"

let object = jsonfile.readFileSync(path); 
const polygonCollection = () =>{ 
     return object
}

const filter = (func ,geoPoint) => 
                polygonCollection.features
                .filter(polygon => func(geoPoint , polygon));                


const addPolygon = (polygon) => {

    object.features.push(polygon);
    return jsonfile.writeFile(path , object) //it will return Promise
}

module.exports = {
    polygonCollection,
    filter,
    addPolygon

}