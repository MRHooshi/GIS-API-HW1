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
    jsonfile.writeFile(path , obj)
    .then(res => {
        console.log('Write complete')
      })
    .catch(error => console.error(error));
    
    return object;
} 

module.exports = {
    allPolygon,
    filter,
    addPolygon

}