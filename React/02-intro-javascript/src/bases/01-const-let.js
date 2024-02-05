console.log('hola mundo');

//variables y constantes

//const su valor no deberia cambiar
const nombre = "Fernando";
//let su valor si puede llegar a cambiar
let apellido = "Herrera";

let valorDado = 5;
valorDado = 6;
console.log(nombre,apellido,valorDado);
//las variables definidas con un mismo nombre y tipo dentro de una sentencia condicional o ciclica no afectaran a las semejantes que se encuentren fuera del scope
if (true) {
    let valorDado = 6;
    console.log(valorDado)
}