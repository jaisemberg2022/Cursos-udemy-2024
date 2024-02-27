var superman = new SuperHeroesApp();

//para mejorar el nivel de comprension de la sintaxis de un codigo C# ofrece tipados conocidos como coleccionables los cuales se encargan de alamacenar distintos tipos de arreglos u objetos los cuales pueden ser tipos de variables primitivas (ARRAYS,OBJECTS) o instanciar un modelo apartir de una clase o enum ya existente.

// poder 1
var poderVolar = new SuperPoder();
poderVolar.nombre = "volar";
poderVolar.descripcipon = "capacidad para poder volar";
poderVolar.nivel = nivelPoder.nivelDos;
// poder 2
var superFuerza = new SuperPoder();
superFuerza.nombre = "Super fuerza";
superFuerza.descripcipon = "ser muy fuerte";
superFuerza.nivel = nivelPoder.nivelTres;
// asignacion al nuvo elemnto instanciado de SuperHeroe
superman.id = 1;
superman.nombre = "superman";
superman.identidadSecreta = "clarck kent";
superman.identidadSecreta = "metropolis";
// creacion de una lista de elementos aparatir de la clases instaciada SuperPoder
List<SuperPoder> poderSuperman = new List<SuperPoder>();
poderSuperman.Add(poderVolar);
poderSuperman.Add(superFuerza);
// asignacion de la lista generica al elemento con la clase instanciada SuperHeroe
superman.superPoderes = poderSuperman;

class SuperHeroesApp
{
    public int id;
    public string nombre;
    public string identidadSecreta;
    public string ciudad;
    public List<SuperPoder> superPoderes;
    public bool puedeVolar;
}

class SuperPoder
{
    public string nombre;
    public string descripcipon;
    public nivelPoder nivel;
}

enum nivelPoder
{
    nivelUno,
    nivelDos,
    nivelTres
}