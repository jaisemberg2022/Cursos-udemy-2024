/*
Polimorfismo en C#:

Definición: El polimorfismo permite que diferentes objetos puedan cambiar la estrcutura de funcionamiento de un metodo abstracto para que realize operacion diferentes o volver mas complejo al mismo.
Tipos:
    1).Polimorfismo de inclusión: Un objeto de una clase derivada puede ser utilizado donde se espera un objeto de la clase base.
    2).Polimorfismo de sobrecarga: Dos o más métodos con el mismo nombre pero diferentes parámetros.

    Diferencias entre polimorfismo y sobrecarga 
    el Polimorfismo consiste en redefinir un método de una clase padre en una clase hija. Mientras que sobrecarga es definir un nuevo método igual que otro viejo, pero cambiando el tipo o la cantidad de parámetros.
*/


internal abstract class Heroe
{
    public virtual string salvarLaTierra()
    {
        return "se ha salvado la tierra";
    }
}

class SuperHeroes : Heroe
{
    public override string salvarLaTierra()
    {
        //return base.salvarLaTierra();
        return $"salvaron  a alguien....";
    }
}

var superman = new SuperHeroes();
Console.WriteLine(superman.salvarLaTierra())