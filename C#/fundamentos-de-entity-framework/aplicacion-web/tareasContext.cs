namespace proyectoef;
using Microsoft.EntityFrameworkCore;
using proyectoef.Models;

class TareasContext : DbContext
{
    public DbSet<Categoria> categorias { get; set; }
    public DbSet<Tarea> tareas { get; set; }
    public TareasContext(DbContextOptions<TareasContext> options) : base(options) { }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        List<Categoria> categoriasInit = new List<Categoria>();
        categoriasInit.Add(new Categoria(){categoriaId = Guid.Parse("2b399f2a-3c7e-4ca5-a53d-dd893967099f"), nombre = "Actividades pendientes",peso = 20 });
        categoriasInit.Add(new Categoria(){categoriaId = Guid.Parse("2b399f2a-3c7e-4ca5-a53d-dd893967001c"), nombre = "Actividades personales",peso = 50 });

        modelBuilder.Entity<Categoria>(categoria =>
        {
            categoria.ToTable("Categoria");
            categoria.HasKey(p => p.categoriaId);
            categoria.Property(p => p.nombre).IsRequired().HasMaxLength(150);
            categoria.Property(p => p.descripcion).IsRequired(false);
            categoria.Property(p=>p.peso);

            categoria.HasData(categoriasInit);
        });

        List<Tarea>tareasInit = new List<Tarea>();
        tareasInit.Add(new Tarea(){TareaId = Guid.Parse("2b399f2a-3c7e-4ca5-a53d-dd893967033c"),CategoriaId = Guid.Parse("2b399f2a-3c7e-4ca5-a53d-dd893967099f"),PrioridadTarea = Prioridad.Media,titulo = "pago de servicios publicos",FechaCreacion = DateTime.Now});
        tareasInit.Add(new Tarea(){TareaId = Guid.Parse("2b399f2a-3c7e-4ca5-a53d-d33eeddee34d"),CategoriaId = Guid.Parse("2b399f2a-3c7e-4ca5-a53d-dd893967001c"),PrioridadTarea = Prioridad.Alta,titulo = "pago de hipoteca",FechaCreacion = DateTime.Now});

        modelBuilder.Entity<Tarea>(tarea =>
        {
            tarea.ToTable("Tarea");
            tarea.HasKey(t => t.TareaId);
            tarea.HasOne(t => t.Categoria).WithMany(p => p.Tareas).HasForeignKey(p => p.CategoriaId);
            tarea.Property(t=>t.titulo).IsRequired().HasMaxLength(200);
            tarea.Property(t=>t.descripcion).IsRequired(false);
            tarea.Property(t=>t.PrioridadTarea);
            tarea.Property(t=>t.FechaCreacion);
            tarea.Ignore(p=> p.Resumen);

            tarea.HasData(tareasInit);
        });

    }

}