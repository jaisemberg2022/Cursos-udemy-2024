"use strict";
(() => {
    // Tipos
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    // Arreglos
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    //Enumeraciones
    let poderFuerza;
    (function (poderFuerza) {
        poderFuerza[poderFuerza["Acuaman"] = 0] = "Acuaman";
        poderFuerza[poderFuerza["Batman"] = 1] = "Batman";
        poderFuerza[poderFuerza["Flash"] = 5] = "Flash";
        poderFuerza[poderFuerza["Superman"] = 100] = "Superman";
    })(poderFuerza || (poderFuerza = {}));
    const fuerzaFlash = poderFuerza.Flash;
    const fuerzaSuperman = poderFuerza.Superman;
    const fuerzaBatman = poderFuerza.Batman;
    const fuerzaAcuaman = poderFuerza.Acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    // Aserciones de Tipo
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
