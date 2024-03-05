using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace curso_LINQ
{
    internal class Book
    {
        public string Title { get; set; }
        public int PageCount { get; set; }
        public string Status { get; set; }
        public DateTime publishedDate { get; set; }
        public string[] Authors { get; set; }
        public string[] Categories { get; set; }

    }
}
