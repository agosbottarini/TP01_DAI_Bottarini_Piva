let miUrl = null;
let miObjeto = null;
miUrl = new URL('http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo');
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);
function parsearUrl(laURL)
{
    laURL.pathname;
    laURL.host;
    laURL.searchParams;
    miObjeto = ["pathname:" + laURL.pathname, "host: " + laURL.host,"Parametros: " + laURL.searchParams]
    return miObjeto;
    
}