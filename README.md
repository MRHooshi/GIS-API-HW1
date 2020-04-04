# GIS-API-HW1
Simple API for working with Geo .First HW of Internet Eng class 
>https://sleepy-everglades-81569.herokuapp.com


## Installation

####  How to run this code

1. Clone this repository
2. Open command line in the cloned folder, 
   - To install dependencies, run ```  npm install  ```
   - To run the application for development, run ```  npm start  ```
3. request to (http://localhost:3000/) 



## API

####   GET METHOD (/gis/testpoint) with query parameter long & lat
example :
   - GET http://localhost:3000/gis/testpoint?long=53&lat=34
####   PUT METHOD (/gis/addpolygon) with following format
```JSON
{
    "type": "Feature",
    "properties": {
    "name": "test"
    },
    "geometry": {
    "type": "Polygon",
    "coordinates": [
        [
        [
            53.514404296875,
            34.59704151614417
        ],
        [
            51.416015625,
            34.854382885097905
        ],
        [
            51.6851806640625,
            33.82023008524739
        ],
        [
            53.514404296875,
            34.59704151614417
        ]
        ]
    ]
    }
}
```