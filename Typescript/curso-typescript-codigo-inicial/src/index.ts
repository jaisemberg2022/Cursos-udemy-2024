// // import { Hero } from "./classes/hero";
// import * as heroClases from "./classes/hero";
// import powers  from "./data/powers";


// console.log("Hola Mundo!");

// const ironman = new heroClases.Hero("ironman", 2, 44);

// console.log(ironman.power);
// console.log(powers);

import { pokemon } from "./decorators/pokemon-class";
import { printObjecect,generciFunction,genericFunctionArrow } from "./generics/generics";
import { getPokemon } from "./generics/get-pokemon";
import { Villian,Hero } from "./interfaces";
import { Pokemon } from './interfaces/pokemon';

// printObjecect('1111');
// printObjecect(true);
// printObjecect({1:'b',2:true,3:3.33});
// printObjecect(['1',2,'3']);
// printObjecect(new Date());

// console.log(generciFunction(1.22).toFixed(2));
// console.log(generciFunction("appp").toUpperCase());
// console.log(generciFunction(new Date()).getDate());


// console.log(genericFunctionArrow(1.22).toFixed(2));
// console.log(genericFunctionArrow("appp").toUpperCase());
// console.log(genericFunctionArrow(new Date()).getDate());


// const deadpool = {
//     name:'deadpool',
//     realName:'wade wins wilson',
//     dangerLevel:130
// }

// console.log(genericFunctionArrow<Villian>(deadpool).dangerLevel)


// getPokemon(4)
// .then(pokemon => console.log(pokemon.sprites.front_default))
// .catch(err => console.log(err))
// .finally( () => console.log('fin get pokemon'))


// console.log(charmander)
// (pokemon.prototype as any ).customeName ="pikachu"
const charmander = new pokemon('charmander');
charmander.publicApi = "appp"
console.log(charmander)