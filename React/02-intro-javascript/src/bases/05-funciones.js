//funciones en js 


// const saludar = function(nombre){
//     return `Hola ${nombre}`;
// }

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`

const getUser = () =>({
    uid:'ABCD123',
    username:'elpapis_123'
});

// console.log(getUser());


const getUsuarioActivo = (nombre) => ({
    uid:'ABC123',
    username:nombre
})
const usuarioActivo = getUsuarioActivo('Jaider');

console.log(usuarioActivo);