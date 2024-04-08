
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from './modules/omdb-wrapper.js'

let respuesta = null;


respuesta = await OMDBSearchByPage('cars', 1);
console.log("OMDBSearchByPage: ", respuesta)

respuesta = await OMDBSearchComplete('cars');
console.log("OMDBSearchComplete: ", respuesta);

respuesta = await OMDBGetByImdbID('tt0317219');
console.log("OMDBGetByImdbID: ", respuesta);




