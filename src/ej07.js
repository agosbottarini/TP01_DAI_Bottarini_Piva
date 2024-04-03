import { getCountry, getCurrency } from 'currency-map-country';
let monedaDelPais, codigoPais;

codigoPais = 'AR';
let existe = Existe(codigoPais)
if(existe == true)
{  
    monedaDelPais = obtenerMoneda(codigoPais);
    monedaDelPais = monedaDelPais.cur
}
else
{
    monedaDelPais = "NULL"
}
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);


codigoPais = 'USA';
existe = Existe(codigoPais)
if(existe == true)
{
    monedaDelPais = obtenerMoneda(codigoPais);
    monedaDelPais = monedaDelPais.cur
}
else
{
    monedaDelPais = "NULL"
}
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);


function obtenerMoneda(codigoPais)
{
    const pais = getCountry(codigoPais)

    return pais;
}

function Existe(codigoPais)
{
    let existe = true
    if(getCountry(codigoPais) == undefined)
    {
        codigoPais = "NULL"
        existe = false
    }
    return existe
}
