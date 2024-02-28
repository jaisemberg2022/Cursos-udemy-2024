/*
Clases abstractas en C#:
Definición: Una clase abstracta define una plantilla para otras clases, pero no se pueden crear objetos de ella directamente.

Características:

    1).Contiene al menos un método abstracto (sin implementación).
    2).Las clases que heredan de una clase abstracta deben implementar sus métodos abstractos.
    3).No se pueden crear instancias de una clase abstracta.
    4).Cuando se hereda de una clase abstracta que contiene métodos o propiedades abstractas por obligación la clase que lo hereda tiene que implementarla con la palabra reservada override y crear el cuerpo de los métodos.

*/


internal abstract class Heroe
{
    public abstract string salvarElMundo();
    public string salvarLaTierra()
    {
        return $"se ha salvado la tierra";
    }
}

class SuperHeroes : Heroe
{
    public override string salvarElMundo()
    {
        return $"{NombreEIdentidadSecreta} ha salvado el mundo";
    }
}

var superman = new SuperHeroes();
var string metodoPropioClaseAbstracta = superman.salvarLaTierra();
Console.WriteLine(metodoPropioClaseAbstracta)