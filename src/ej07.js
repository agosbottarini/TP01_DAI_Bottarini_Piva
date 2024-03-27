import { getCountry, getCurrency } from 'currency-map-country';
let monedaDelPais, codigoPais;

codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'USA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigoPais)
{
    const pais = getCountry(codigoPais);
    console.log(pais);
    let moneda = getCurrency(pais)

    return moneda;
}
