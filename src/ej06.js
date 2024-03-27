let miUrl = null;
let miObjeto = null;
miUrl = new URL('//campugfhfs.ort.edu.ar/secundaria/almagro/informatica/tp/2069831/tp-2666-node-acercamientosdsddh');
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);
function parsearUrl(laURL)
{

    if(miUrl != null)
    {
        laURL.pathname;
        laURL.host;
        laURL.searchParams;

    }
    else
    {
        laURL.pathname = " ";
        laURL.host = " ";
        laURL.searchParams = " ";

    }
    miObjeto = ["pathname:" + laURL.pathname, "host: " + laURL.host,"Parametros: " + laURL.searchParams]

    return miObjeto;
}