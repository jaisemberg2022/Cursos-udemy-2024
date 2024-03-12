using Humanizer;


// See https://aka.ms/new-console-template for more information
Console.WriteLine("Porfavor ingrese un nombre");
var nombre = Console.ReadLine();
Console.WriteLine("Porfavor ingrese su cargo");
var cargo = Console.ReadLine();
Console.WriteLine("Porfavor ingrese su edad");
var edad = int.Pase(Console.ReadLine());


Console.WriteLine($"hola,mi nombre es {nombre}, mi cargo es {cargo}, y tengo {edad.ToWords(new System.Globalization.CultureInfo("es"))} años");



