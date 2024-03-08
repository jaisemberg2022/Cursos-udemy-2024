// See https://aka.ms/new-console-template for more information
using curso_LINQ;


LinqQueries Queries = new LinqQueries();
//toda la coleccion 
//ImprimirValores(Queries.todaLaCollecion());

//libros despues del 2000
//ImprimirValores(Queries.LibrosDespuesDel200());

//libros con mas de 250 paginas
// ImprimirValores(Queries.LibrosConMasDe250PaginasInAction());

// todos los libros tiene status
// Console.WriteLine(Queries.TodosLosLibrosTieneStatus());

//si algun libro fue publicado en 2005
// Console.WriteLine(Queries.SiAlgunLibroFuePublicadoEn2005());

//libros de python
// ImprimirValores(Queries.LibrosDePython());

//libros de java ordenados por nombre
// ImprimirValores(Queries.LibrosDeJavaPorNombreAscendente());

//libros con mas de 450 paginas
// ImprimirValores(Queries.LibrosDeMasDe450PaginasOrdenadosDescendentemente());

//3 libros de java  publicados recientemente
// ImprimirValores(Queries.TresPrimerosLibrosJavaOrdenadosPorFecha());

//tercer y cuarto libro con mas de 400 paginas
// ImprimirValores(Queries.TercerYCuartoLibroDeMasDe400Paginas());

//tres primeros libros filtrados con select 
// ImprimirValores(Queries.TresPrimerosLibrosDeLaColeccion());

// cantidad de libros que tiene entre 200 y 500 paginas
 Console.WriteLine("cantidad de libros entr 200 y 500 paginas " + Queries.CantidadDeLibrosEntre200Y500Paginas());




void ImprimirValores(IEnumerable<Book> listaLibros)
{
    Console.WriteLine("{0,-70}, {1, 7},{2,15}\n");
    foreach (var item in listaLibros)
    {
        Console.WriteLine("{0,-70}, {1, 7},{2,15}",item.Title,item.PageCount,item.publishedDate.ToShortDateString());
    }
}
