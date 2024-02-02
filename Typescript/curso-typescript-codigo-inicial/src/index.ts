// // import { Hero } from "./classes/hero";
// import * as heroClases from "./classes/hero";
// import powers  from "./data/powers";


// console.log("Hola Mundo!");

// const ironman = new heroClases.Hero("ironman", 2, 44);

// console.log(ironman.power);
// console.log(powers);

import { printObjecect,generciFunction,genericFunctionArrow } from "./generics/generics";

// printObjecect('1111');
// printObjecect(true);
// printObjecect({1:'b',2:true,3:3.33});
// printObjecect(['1',2,'3']);
// printObjecect(new Date());

// console.log(generciFunction(1.22).toFixed(2));
// console.log(generciFunction("appp").toUpperCase());
// console.log(generciFunction(new Date()).getDate());


console.log(genericFunctionArrow(1.22).toFixed(2));
console.log(genericFunctionArrow("appp").toUpperCase());
console.log(genericFunctionArrow(new Date()).getDate());

