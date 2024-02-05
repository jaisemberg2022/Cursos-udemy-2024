const personajes = ['goku','vegueta','trunks'];
const [ ,p2,p3 ] = personajes;
console.log(p2);

const retornaArreglo = ( ) =>{
     return ['ABC',123]
}

const [letras,numeros] = retornaArreglo();
console.log(letras,numeros);


const State = (valor) => {
    return [valor,()=>{console.log('hola')}];
}

const [nombre,setNombre] = State('Goku');
//el segundo valor del arreglo al ser una funcion se debe de invocar
console.log(nombre,setNombre())

