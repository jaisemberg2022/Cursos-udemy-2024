// See https://aka.ms/new-console-template for more information
using curso_LINQ;

Console.WriteLine("Hello, World!");

LinqQueries linqQueries = new LinqQueries();

void ImprimirValores(IEnumerable<Book> listaLibros)
{
    Console.WriteLine("{0,-70}, {1, 7},{2,11}");
}