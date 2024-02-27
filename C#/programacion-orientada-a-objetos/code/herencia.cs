/*
HERENCIA: la herencia permite que una clase herede atributos y métodos de otra clase. es una forma de reutilizar 
el código para así, establecer relaciones entre las clases.
*/


class SuperHeroes
{
    private string _nombre;
    public string nombre
    {
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

    public string identidadSecreta;

}

class AntiHeroe:SuperHeroes
{
    public string realizarAccionDeAntiheroe(string accion) 
    {
        return $"El antiheroe {NombreEIdentidadSecreta} ha realizado un {accion}";
    }
}

public string realizarAccionDeAntiheroe(string accion)
{
    return $"El antiheroe {NombreEIdentidadSecreta} ha realizado un {accion}";
}

var wolverine = new AntiHeroe();
wolverine.nombre = "wolverine";
wolverine.identidadSecreta = "Logan";
var accionAntiheroe = wolverine.realizarAccionDeAntiheroe("Ataque a la policia");
Console.WriteLine(accionAntiheroe);
