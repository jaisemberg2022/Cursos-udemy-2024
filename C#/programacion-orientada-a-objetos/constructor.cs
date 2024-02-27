
// 1).Un constructor es una función que va dentro de una clase y que lleva exactamente el mismo nombre de la clase. Esta función no debe retornar nada.
// 2).El constructor se ejecuta automaticamente cuando se instancia la clase.
// 3).En este constructor podemos establecer valores por defecto en nuestras propiedades y, por lo tanto, nos ayuda a minimizar el código ya que no tenemos que inicializar los valores de manera manual cada vez que creemos una instancia nueva.

class SuperHeroesApp
{
    public int id;
    public string nombre;
    public string identidadSecreta;
    public string ciudad;
    public List<SuperPoder> superPoderes;
    public bool puedeVolar;
     //CONSTRUCTOR
    public SuperHeroesApp()
    {
        //dentro del constructor es posible definir valores por defecto para las propiedades definidas en la clase para que al momento de ser instanciadas ya posean un valor definido
        superPoderes = new List<SuperPoder>();
        puedeVolar = false;
    }
}

class SuperPoder
{
    public string nombre;
    public string descripcipon;
    public nivelPoder nivel;
    //CONSTRUCTOR
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