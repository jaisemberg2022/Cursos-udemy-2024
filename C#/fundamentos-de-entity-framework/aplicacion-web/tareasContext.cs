namespace proyectoef;
using Microsoft.EntityFrameworkCore;
using proyectoef.Models;

class TareasContext:DbContext
{
    public DbSet<Categoria> categorias { get; set; }
    public DbSet<Tarea> tareas {get;set;}

    public TareasContext(DbContextOptions<TareasContext> options):base( options)
    {
        
    }
    
}