"use strict";
(() => {
    // Objetos
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    // Villanos debe de ser un arreglo de objetos personalizados
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
    console.log(mystique);
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} , ${lastName || 'no last name'}`.toUpperCase();
        }
        else {
            return `${firstName} , ${lastName || 'no last name'}`;
        }
    };
    const name = fullName('tony', 'stark');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} , ${lastName || 'no last name'} `;
    };
    const name = fullName('tony');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} , ${lastName}`;
    };
    const name = fullName('tony', 'stark');
    console.log({ name });
})();
(() => {
    const fullNmae = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullNmae('clark', 'joseph', 'kent');
    console.log({ superman });
})();
(() => {
    const addNumber = (a, b) => a + b;
    const saludar = (nombre) => `Hola ${nombre}`;
    const saveTheWord = () => 'el mundo esta salvado!';
    let myFunction;
    // myFunction = 10;
    // console.log(myFunction);
    // myFunction = addNumber;
    // console.log(myFunction(1,2) )
    // myFunction = saludar
    // console.log(myFunction('fernando') )
    myFunction = saveTheWord;
    console.log(myFunction());
})();
(() => {
    const hero = 'flash';
    function returnName() {
        return hero;
    }
    const activateBatsignal = () => {
        return 'batiseñal activada';
    };
    console.log(typeof activateBatsignal);
})();
(() => {
    let flash = {
        name: 'barry allen',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo']
    };
    let superman = {
        name: 'clarck kent',
        age: 60,
        powers: ['super fuerza']
    };
    console.log(flash.getName);
})();
(() => {
    let flash = {
        name: 'barry allen',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo']
    };
    console.log(flash);
})();
(() => {
    let myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable);
    let myCustomVariable2 = 22;
    console.log(typeof myCustomVariable2);
    let myCustomVariable3 = {
        age: 32,
        name: 'spiderman',
        powers: ['lanzar telraña'],
    };
    console.log(typeof myCustomVariable3);
})();
(() => {
    let avenger = 123;
    let exist;
    let power;
    avenger = 'Dr strange';
    // console.log(avenger.charAt(0));
    //tipo de casteo 1
    console.log(avenger.charAt(0));
    avenger = 122.23456223;
    // console.log(avenger.toFixed(2));
    //tipo de casteo 2
    console.log(avenger.toFixed(2));
    console.log(exist, power);
})();
(() => {
    // const numbers:(string|number|boolean)[] = [1,2,3,4,"5",6,7,8,9,10,true];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villians = ['omega rojo', 'Dormamu', 'Duende verde'];
    villians.forEach(v => console.log(v.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let aduioLevel;
    (function (aduioLevel) {
        aduioLevel[aduioLevel["min"] = 0] = "min";
        aduioLevel[aduioLevel["medium"] = 1] = "medium";
        aduioLevel[aduioLevel["max"] = 2] = "max";
    })(aduioLevel || (aduioLevel = {}));
    let currentAudio = aduioLevel.max;
    console.log(currentAudio);
    console.log(aduioLevel);
})();
(() => {
    const error = (message) => {
        if (false) {
            throw Error(message);
        }
        return 1;
    };
    error('auxilio');
})();
(() => {
    let isActive = undefined;
    console.log(isActive);
})();
(() => {
    let avengers = 10;
    const villanos = 20;
    if (avengers < villanos) {
        console.log('estamos en problemas');
    }
    else {
        console.log('nos salvamos');
    }
    avengers = Number('55A');
    console.log({ avengers });
})();
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
(() => {
    const hero = ['Dr strange', 100, false];
    hero[0].toUpperCase();
    hero[1] = 50;
    hero[2] = true;
    console.log({ hero });
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map