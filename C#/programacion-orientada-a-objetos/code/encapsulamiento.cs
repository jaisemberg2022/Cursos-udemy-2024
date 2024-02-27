/*
Encapsulamiento:

Se refiere a la idea de ocultar los detalles internos de un objeto y proporcionar una interfaz pública bien definida para interactuar con él.
Permite controlar el acceso a los atributos y métodos de un objeto, lo que ayuda a mantener 
la integridad de los datos y facilita la gestión y el mantenimiento del código.
En el encapsulamiento, los atributos de un objeto se declaran como privados, lo que significa que solo pueden accederse y modificarse desde dentro de la propia clase a la que pertenece el objeto.
Para permitir que otros objetos interactúen con estos atributos, se proporcionan métodos públicos, también conocidos como métodos de acceso o getters y setters, que permiten obtener y establecer los valores de los atributos de manera controlada.
Los beneficios del encapsulamiento son:

    1).Control de acceso: Se puede especificar quién tiene acceso a los datos y quién no. Esto ayuda a prevenir modificaciones no deseadas o inconsistentes en los datos.
    2).Ocultamiento de detalles internos: Los detalles de implementación de una clase se mantienen ocultos, lo que facilita el cambio de la implementación sin afectar a los objetos que la utilizan.
    3).Facilita la mantenibilidad: Al tener una interfaz pública bien definida, es más fácil identificar y corregir problemas en el código, ya que se sabe dónde se realizan las interacciones con el objeto.


Beneficios del Encapsulamiento:

    1).Evita la manipulación incorrecta de datos por parte del usuario.
    2).Mejora la legibilidad del código al ocultar detalles de implementación.
    3).Facilita la adición de comportamientos específicos en nuevas propiedades.
*/

    class SuperHeroes
    {
        private string _nombre;
        // pripiedad encapsulada
        public string nombre {
            get
            {
                return _nombre;
            }
            set
            {
                _nombre = value.Trim();
            } 
        }

        public string NombreEIdentidadSecreta 
        {
            get 
            {
                return $"{nombre} ({identidadSecreta})";
            }
        }

        public string usarSuperPoderes()
        {
            StringBuilder sb = new StringBuilder();
            foreach (var item in superPoderes)
            {
                sb.AppendLine($"{NombreEIdentidadSecreta} esta usando el super poder {item.nombre}");
            }
            return sb.ToString();
        }
    }
