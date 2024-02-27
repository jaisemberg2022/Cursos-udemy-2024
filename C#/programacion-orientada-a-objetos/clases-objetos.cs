Console.WriteLine("Hello, World!");

Apuntador apuntadorPlatzi = new Apuntador();
Apuntador apuntadorPlatzi2 = new Apuntador();

//los objetos utilizan las clases a modo de tipado para definir un estructura propia que albergara diferentes contenidos
apuntadorPlatzi.Color = "Negro";
apuntadorPlatzi2.Color = "Negro";

//las clases definen varias propiedades o comportamientos (metodos) que sirven a modo de modelos para asi porder reutilizar su estructura con diferentes objetos  
class Apuntador
{
    public string Color;
    public double Largo;
    public short NumeroDeBotones;
    public bool TieneStickers;
}