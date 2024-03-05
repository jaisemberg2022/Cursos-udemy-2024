﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
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
                this.librosCollection = System.Text.Json.JsonSerializer.Deserialize<List<Book>>(json, new System.Text.Json.JsonSerializerOptions() { PropertyNameCaseInsensitive = true} ) ;

            }
        }
        public IEnumerable<Book> todaLaCollecion()
        {
            return librosCollection ;
        }
    }

}
