/*Modificadores de Acceso Vamos a poder asignar quien puede usar nuestras clases o el alcance de las clases en nuestro proyecto. Los modificadores más relevantes y que mas se utilizan son los siguientes:

    1).Public: Exponemos los métodos y propiedades de la clase para que puedan ser utilizados por cualquiera que este creando objetos con nuestra clase. El acceso no está restringido. 
    2).Protected: El acceso esta limitado a la clase contenedora o a los tipos derivados de la clase contenedora. Garantizamos que las clases que hereden de esta clase también lo puedan utilizar. 
    3).Internal: el acceso está limitado al ensamblado actual. Es comun en C# tiener muchos proyectos que se referencien a otors, asi aseguramos que la clase solo sea utilizada por nuestro proyecto internamente. 
    4).Private: Evitamos que cualquiera que este fuera del contexto de nuestra clase pueda utilizar los métodos o propiedades de la clase. El acceso está limitado al tipo contenedor. 
    5).Private Protected: El acceso está limitado a la clase contenedora o a los tipos derivados de la clase contenedora que hay en el ensamblado actual 
    6).Protected internal: El acceso está limitado al ensamblado actual o a los tipos derivados de la clase contenedora.
*/
class Ejemplo
{
    public string publico;
    protected double protejido;
    internal short interno;
    private void privado() {
        Console.WriteLine("privado");
    }
    private protected void privadoProtejido()
    {
        Console.WriteLine("privado protejido");

    }
    protected internal bool example;
}