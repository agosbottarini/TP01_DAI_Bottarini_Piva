/* Módulo OMDBWrapper*/
import axios from "axios";
const APIKEY = "d22189a8"; 
const OMDBSearchByPage = async (searchText, page = 1) => {
    let returnObject = {
        respuesta : false,
        cantidadTotal : 0,
        datos : {}
    };

    const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}`
    ;
    const apiResponse = await axios.get(requestString);
    let datos = apiResponse.data;
    returnObject.respuesta = datos.Response;
    returnObject.cantidadTotal = datos.totalResults;
    returnObject.datos = datos.Search;
    return returnObject;
};
const OMDBSearchComplete = async (searchText) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : {}
};

// No seas vago, acá hay que hacer el cuerpo de la función!!!
return returnObject;
};
const OMDBGetByImdbID = async (imdbID) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : {}
};
// No seas vago, acá hay que hacer el cuerpo de la función!!!
return returnObject;
};
// Exporto todo lo que yo quiero exponer del módulo:
export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};