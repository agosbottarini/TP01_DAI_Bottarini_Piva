/* Importo la constante PI y la función sumar del módulo matematica. */
import {dividir, multiplicar, PI, restar, sumar, Array1} from './modules/matematica.js';

let totalsum, totalrest, totalmult, totaldiv, numero1=10, numero2=20;

console.clear();

console.log(`La constante PI vale '${PI}'`); // Uso la constante PI importada.

totalsum = sumar(numero1, numero2);
console.log(`sumar(${numero1}, ${numero2}) = ${totalsum}`);

totalrest = restar(numero1, numero2);
console.log(`restar(${numero1}, ${numero2}) = ${totalrest}`);

totalmult = multiplicar(numero1,numero2);
console.log(`multiplicar(${numero1}, ${numero2}) = ${totalmult}`);

totaldiv = dividir(numero1, numero2);
console.log(`dividir(${numero1}, ${numero2}) = ${totaldiv}`);

console.log(Array1);

