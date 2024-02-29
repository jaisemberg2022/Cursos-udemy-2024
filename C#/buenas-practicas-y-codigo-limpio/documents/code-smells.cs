/*CODE SMELL

Si nota algunas señales de que algo podría estar mal, sabrá que algo anda 
mal con su código. A veces, estos errores pueden indicar una mala calidad
del código, pero los errores que parecen "malos, feos o extraños" a primera vista 
pueden en muchos casos provocar problemas operativos más profundos en el código o 
la aplicación que causarán problemas graves. Estructura o incluso reescribe tu código
para obtener un código limpio y una mejor funcionalidad.*/

// EJEMPLOS DE CODE SMELL

    //1).Variables, métodos o clases con nombres poco descriptivos.

        // mal
        int d;
        // bien
        int daySinceModification;
    
    /*2).Métodos y clases de muchísimas líneas que se vuelven difíciles entender. 
    Esto es un indicativo de que las  funcionalidades internas se pueden separar en 
    pequeñas partes y así organizar las responsabilidades en clases y metodos 
    mas pequeños y entendibles.*/

        public void getName(){
            // cuerpo de la funcion de mas de 100 lineas de codigo;
        }

    //3).Métodos o funciones que reciben demasiados parámetros, lo que indica que hay mucha lógica dentro de esa función.

        public string getCompleteName(string firstName,string secondName,string surname,string secondSurname,string alias){
            return $"{firstName} {secondName} {surname} {secondSurname} is {alias}";
        }

    /*4).“Números mágicos” o “quemados”, esto se refiere a números fijos que utilizamos dentro de la lógica de nuestro código y que puede 
    causar que a primera vista no se entienda cuál es su función dentro del mismo y se requiera de más tiempo para comprender lo que hace */

        public string getDefineNumber(int variable){
            
            if (variable == 1)
            {
                return 'valor 1'
            }
            else if (variable == 2)
            {
                return 'valor 2'

            }
            else if (variable == 3)
            {
                return 'valor 3'
            }
        }

        getDefineNumber(2);

