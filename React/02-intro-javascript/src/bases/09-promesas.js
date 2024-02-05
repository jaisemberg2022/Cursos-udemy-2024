import { getHeroeById } from "./bases/08-importaciones-exportaciones";

// const promesa = new Promise((resolve,reject) =>{
//     setTimeout( ()=> {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         // reject('no se pudo encontro el heroe');
//     },2000)
// });

// promesa.then( (heroe)=> {
//     console.log(heroe)
// }).catch(err =>  console.warn(err));

const getHeroeByIdAsync = (id) =>{

    return new Promise((resolve,reject) =>{
        setTimeout( ()=> {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe)
            }else{
                reject('no se encontro el heroe')
            }
        },2000)
    });

}


getHeroeByIdAsync(3)
.then(console.log)
.catch(console.warn)