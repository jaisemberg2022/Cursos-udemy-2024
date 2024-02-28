/*
Defincion de interfaces

Una interfaz es una entidad que define un conjunto de métodos y propiedades que implementan una clase
en particular. En otras palabras, una interfaz define un contrato que las clases que la implementan deben seguir. Las interfaces en C# permiten 
la abstracción y la herencia múltiple porque una clase puede implementar múltiples interfaces.

diferencias entre interfaces y clases :

    1).Las interfaces no pueden tener instancias. Una interfaz solo puede ser implementada por un tipo de datos.
    2).Las interfaces solo pueden definir métodos, propiedades y eventos. Las clases pueden definir datos de instancia, métodos, propiedades y eventos.
    3).Las interfaces se utilizan para especificar el comportamiento. Las clases se utilizan para definir tipos de datos.


*/


 internal interface ISuperHeroes
 {
     int id { get; set; }    
     string nombre {  get; set; }
     string identidadSecreta { get; set; }
 }

   class SuperHeroes:ISuperHeroes
  {
      private string _nombre;
      public int id { get; set; }
      public override string nombre {
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

      public string identidadSecreta { get; set; }
     
  }