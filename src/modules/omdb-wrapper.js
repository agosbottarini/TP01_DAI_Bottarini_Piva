/* Módulo OMDBWrapper*/
import axios from "axios";
const APIKEY = "d22189a8"; // Poné tu APIKEY, esta no funciona.
const OMDBSearchByPage = async (searchText, page = 1) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : {}
};

const requestString = `https://www.omdbapi${APIKEY}.com/?=7c62gb5e&s=cars`;
const apiResponse = await axios.get(requestString);
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