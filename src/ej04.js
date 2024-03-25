import fs, { readFileSync, writeFileSync } from 'fs';
const ARCHIVO_ENTRADA = "Z:/2024/DAI/src/entrada.txt";
const ARCHIVO_SALIDA = "/Z:/2024/DAI/src/salida.txt";
console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

function copiar(origen, destino)
{
    let a = fs.readFileSync(origen);
    fs.writeFileSync(destino, a);
}
