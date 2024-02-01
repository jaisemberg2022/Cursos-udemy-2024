"use strict";
(() => {
    var _a;
    //comillas sencillas
    const batman = 'batman';
    //comillas dobles utilizadas en caso de uso caracteres que involucren reglas de signos de puntuacion como apostrofes
    const linternaVerde = "linterna Verde";
    //comillas especiales(Backtick) utilizadas par interpolar valores dentro de una cadena de texto 
    const volcanoNegro = `heroe:volcano negro`;
    const abc = 123;
    console.log(`i'm ${batman} + ${abc}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'no esta presente');
})();
//# sourceMappingURL=strings.js.map