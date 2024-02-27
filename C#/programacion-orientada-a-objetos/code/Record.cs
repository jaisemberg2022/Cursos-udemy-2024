/*
RECORD En C#: un "record" es un tipo de referencia inalterable que se utiliza para modelar datos simples y valores fijos. Los "records" son especialmente útiles cuando tienes un conjunto de datos que no cambia después de su creación y deseas garantizar que no se pueda modificar. Algunas de las ventajas y casos de uso comunes de los "records" incluyen:

    1).Inmutabilidad: Los "records" son inmutables de forma predeterminada, lo que significa que sus valores no pueden cambiar después de que se hayan creado. Esto garantiza que los datos permanezcan consistentes y predecibles.
    2).Facilidad de Igualdad: Los "records" facilitan la comparación de igualdad de objetos basándose en sus valores en lugar de sus referencias. Esto es útil al realizar comparaciones de igualdad en lugar de referencia.
    3).Sintaxis Concisa: Los "records" tienen una sintaxis concisa para definir propiedades y métodos. Puedes definir propiedades de solo lectura de manera abreviada.
    4).Desestructuración: Los "records" admiten la desestructuración, lo que significa que puedes descomponer un objeto "record" en sus componentes individuales.
    5).Patrones de Coincidencia: Los "records" funcionan bien con patrones de coincidencia, lo que facilita la escritura de código que responde a diferentes combinaciones de valores de objetos "record".
    6).Usos Comunes: Los "records" son ideales para modelar tipos de datos simples como puntos, vectores, coordenadas geográficas, datos de sensores y otros valores inmutables.
*/


using System.Text;

var poderVolar = new SuperPoder();
poderVolar.nombre = "volar";
poderVolar.descripcipon = "capacidad para poder volar";
poderVolar.nivel = nivelPoder.nivelDos;

var superFuerza = new SuperPoder();
superFuerza.nombre = "Super fuerza";
superFuerza.descripcipon = "ser muy fuerte";
superFuerza.nivel = nivelPoder.nivelTres;

SuperHeroeRecord superHeroeRecord = new(1, "superman", "clark kent");
SuperHeroeRecord superHeroeRecord2 = new(1, "superman", "clark kent");
//compara los 2 nuevos registros y determinan si tienen la misma data (retorna TRUE)
Console.WriteLine(superHeroeRecord == superHeroeRecord2);

string resultSuperPoderes =  superman.usarSuperPoderes();
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

//RECORD
public record SuperHeroeRecord(int id,string nombre, string identidadSecreta);