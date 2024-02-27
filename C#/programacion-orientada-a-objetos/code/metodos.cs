/*
 Métodos dentro de una clase en C# POO:

 En resumen:
    1).Los métodos son acciones que una clase puede realizar.
    2).Se definen dentro de la clase con una estructura similar a una función.
    3).Permiten encapsular funcionalidad y reutilizarla.
    4).Pueden tener diferentes tipos de acceso (public, private, etc.)
    5).Pueden tener parámetros para recibir datos y devolver valores.

 Beneficios:
    1).Modularidad: Dividen el código en partes más pequeñas y manejables.
    2).Reutilización: Permiten usar la misma funcionalidad en diferentes partes del código.
    3).Encapsulamiento: Ocultan detalles de implementación y solo exponen la funcionalidad necesaria.
*/
using System.Text;

var superman = new SuperHeroesApp();

var poderVolar = new SuperPoder();
poderVolar.nombre = "volar";
poderVolar.descripcipon = "capacidad para poder volar";
poderVolar.nivel = nivelPoder.nivelDos;

var superFuerza = new SuperPoder();
superFuerza.nombre = "Super fuerza";
superFuerza.descripcipon = "ser muy fuerte";
superFuerza.nivel = nivelPoder.nivelTres;


superman.id = 1;
superman.nombre = "superman";
superman.identidadSecreta = "clarck kent";
superman.identidadSecreta = "metropolis";

List<SuperPoder> poderSuperman = new List<SuperPoder>();
poderSuperman.Add(poderVolar);
poderSuperman.Add(superFuerza);

superman.superPoderes = poderSuperman;
//invocacion del metodo
string resultSuperPoderes =  superman.usarSuperPoderes();
Console.WriteLine(resultSuperPoderes);
class SuperHeroesApp
{
    public int id;
    public string nombre;
    public string identidadSecreta;
    public string ciudad;
    public List<SuperPoder> superPoderes;
    public bool puedeVolar;
    public SuperHeroesApp()
    {
        superPoderes = new List<SuperPoder>();
        puedeVolar = false;
    }
    //METODO
    public string usarSuperPoderes()
    {
        StringBuilder sb = new StringBuilder();
        foreach (var item in superPoderes)
        {
            sb.AppendLine($"{nombre} esta usando el super poder {item.nombre}");
        }
        return sb.ToString();
    }
}

class SuperPoder
{
    public string nombre;
    public string descripcipon;
    public nivelPoder nivel;
    public SuperPoder()
    {
        nivel = nivelPoder.nivelUno;
    }
}

enum nivelPoder
{
    nivelUno,
    nivelDos,
    nivelTres
}