using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace curso_LINQ
{
    internal class LinqQueries
    {
        private List<Book> librosCollection = new List<Book>();
        public LinqQueries()
        {
            using (StreamReader reader = new StreamReader("books.json"))
            {
                string json = reader.ReadToEnd();
                this.librosCollection = JsonSerializer.Deserialize<List<Book>>(json, new JsonSerializerOptions { PropertyNameCaseInsensitive = true }) ?? Enumerable.Empty<Book>().ToList();
            }
        }
        public IEnumerable<Book> todaLaCollecion()
        {
            return librosCollection ;
        }

        public IEnumerable<Book> LibrosDespuesDel200()
        {
            //extencion metohd
            //return librosCollection.Where(p => p.publishedDate.Year > 2000);

            //query exprecion
            return from l in librosCollection where l.publishedDate.Year > 2000 select l;
        }

        public IEnumerable<Book> LibrosConMasDe250PaginasInAction()
        {
            //extencion metodh
            //return librosCollection.Where(p => p.PageCount > 250 && p.Title.Contains("in Action"));

            //query exprecion
            return from l in librosCollection where l.PageCount> 250 && l.Title.Contains("in Action") select l;
        }
        public bool TodosLosLibrosTieneStatus(){
            return librosCollection.All(p=> p.Status != string.Empty);
        }
        public bool SiAlgunLibroFuePublicadoEn2005(){
            return librosCollection.Any(p => p.publishedDate.Year == 2005);
        } 
        public IEnumerable<Book> LibrosDePython(){
            return librosCollection.Where(p => p.Categories.Contains("Python"));
        }

        public IEnumerable<Book> LibrosDeJavaPorNombreAscendente(){
            return librosCollection.Where(p => p.Categories.Contains("Java")).OrderBy(p=> p.Title);
        }

        public IEnumerable<Book> LibrosDeMasDe450PaginasOrdenadosDescendentemente(){
            return librosCollection.Where(p=>p.PageCount > 450).OrderByDescending(p=>p.PageCount);
        }
        public IEnumerable<Book> TresPrimerosLibrosJavaOrdenadosPorFecha(){
            return librosCollection
            .Where(p => p.Categories.Contains("Java"))
            .OrderByDescending(p => p.publishedDate)
            .TakeLast(3);
        } 

        public IEnumerable<Book> TercerYCuartoLibroDeMasDe400Paginas(){
            return librosCollection
            .Where(p => p.PageCount > 400)
            .Take(4)
            .Skip(2);
        }

        public IEnumerable<Book> TresPrimerosLibrosDeLaColeccion(){
            return librosCollection.Take(3)
            .Select(p => new Book() {Title = p.Title, PageCount = p.PageCount});
        }

        public long CantidadDeLibrosEntre200Y500Paginas(){
            return librosCollection.LongCount(p => p.PageCount >=200 && p.PageCount <=500);
        }
    }

}
