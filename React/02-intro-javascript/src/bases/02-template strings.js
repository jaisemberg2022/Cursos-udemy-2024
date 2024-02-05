const nombre = "Jaider";
const apellido = "Toro";
//template strings
let nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return `hola ${nombre}`
}

console.log(`Este es un texto: ${getSaludo(nombre)} `)    