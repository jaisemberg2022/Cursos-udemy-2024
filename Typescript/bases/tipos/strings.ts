(()=>{

    //comillas sencillas
    const batman:string = 'batman';
    //comillas dobles utilizadas en caso de uso caracteres que involucren reglas de signos de puntuacion como apostrofes
    const linternaVerde:string = "linterna Verde";
    //comillas especiales(Backtick) utilizadas par interpolar valores dentro de una cadena de texto 
    const volcanoNegro:string =  `heroe:volcano negro`;

    const abc:number = 123;

    console.log(`i'm ${batman} + ${abc}`);
    console.log(batman.toUpperCase());
    console.log(batman[10]?.toUpperCase()  || 'no esta presente')

})()