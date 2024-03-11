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
//  Console.WriteLine("cantidad de libros entr 200 y 500 paginas " + Queries.CantidadDeLibrosEntre200Y500Paginas());

// fecha de publicacion de todos los libros
//  Console.WriteLine(Queries.FechaDePublicacionMenor());

//libro con mayor numero depaginas
//  Console.WriteLine("el libro con mayor cantidad de paginas tiene "+Queries.NumeroDePaginasLibroMayor() + " paginas");

// libro con menor cantidad de paginas que no sea cero
// var resultado = Queries.LibroConMenorNumeroDePaginas();
// Console.WriteLine("el libro " + resultado.Title + " tiene " + resultado.PageCount + " paginas" );


// libro con mayor cantidad de paginas que no sea cero
// var resultado = Queries.LibroConFechaDePublicacionMasReciente();
// Console.WriteLine("el libro " + resultado.Title + " se publico " + resultado.publishedDate.ToShortDateString());

//suma de paginas de los libros entre 0 y 500
// Console.WriteLine("la suma de todas las paginas es de  " + Queries.SumaDeTodasLasPaginasLibrosEntre0Y500());


// libros publicados despues del 2015
// Console.WriteLine(Queries.TitulosDeLibrosDespuesDel2015Concatenados());


// promedio de caractere de los titulos de los libros
// Console.WriteLine("el promedio de caracteres de los libros es de " + Queries.PromedioCaracteresTitulo());

// libros publicados despues del 2000 agrupados por año
// Console.WriteLine("el promedio de caracteres de los libros es de " + Queries.PromedioCaracteresTitulo());


// diccionario de libros por primera letra 
// var diccionarioLookup = Queries.DiccionarioDeLibrosPorLetra();
// ImprimirDiccionario(DiccionarioDeLibrosPorLetra,'S'); 



void ImprimirValores(IEnumerable<Book> listaLibros)
{
    Console.WriteLine("{0,-70}, {1, 7},{2,15}\n");
    foreach (var item in listaLibros)
    {
        Console.WriteLine("{0,-70}, {1, 7},{2,15}",item.Title,item.PageCount,item.publishedDate.ToShortDateString());
    }
}


void ImprimirGrupo(IEnumerable<IGrouping<int,Book>> ListadeLibros)
{
    foreach(var grupo in ListadeLibros)
    {
        Console.WriteLine("");
        Console.WriteLine($"Grupo: { grupo.Key }");
        Console.WriteLine("{0,-60} {1, 15} {2, 15}\n", "Titulo", "N. Paginas", "Fecha publicacion");
        foreach(var item in grupo)
        {
            Console.WriteLine("{0,-60} {1, 15} {2, 15}",item.Title,item.PageCount,item.publishedDate.Date.ToShortDateString()); 
        }
    }
}

void ImprimirDiccionario(ILookup<char, Book> bookList, char letter)
{
	Console.WriteLine("{0,-60} {1, 15} {2, 15}\n", "Titulo", "N. Paginas", "Fecha publicacion");
	foreach (var item in bookList[letter])
	{
        	Console.WriteLine("{0,-60} {1, 15} {2, 15}",item.Title,item.PageCount,item.publishedDate.Date.ToShortDateString()); 
	}

}