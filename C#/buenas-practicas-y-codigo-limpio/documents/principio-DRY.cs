/*
Principio DRY
DRY: Don’t Repeat Yourself (No te repitas) .

    El objetivo de este principio es evitar la duplicación de partes de código 
    en nuestro código. Cada pieza de conocimiento debe tener una única representación 
    autorizada, sin ambigüedades, dentro de un sistema.

    una regla de oro en el refactoring es la Regla de tres: repetir una vez el mismo código 
    puede ser aceptable, pero la tercera vez que utilizamos el mismo código, es señal inequívoca 
    de que hay que refactorizar y solucionar la duplicación.

*/

    // mal
        var int pago = 200;
        if(pago < 300)
        {
            return 'pago incorrecto'
        }
        else if(pago <= typeof(int))
        {
            return 'pago incorrecto'
        }
        else
        {
            return 'pago correcto'
        }
    //bien
        var int pago = 200;
        if(pago < 300)
        {
            resultadoIncorrecto();
        }
        else if(pago <= typeof(int))
        {
            resultadoIncorrecto();
        }
        else
        {
            return 'pago correcto'
        }

        public string resultadoIncorrecto(){
            return 'pago incorrecto'
        }