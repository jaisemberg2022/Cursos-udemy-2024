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
        modelBuilder.Entity<Categoria>(categoria =>
        {
            categoria.ToTable("Categoria");
            categoria.HasKey(p => p.categoriaId);
            categoria.Property(p => p.nombre).IsRequired().HasMaxLength(150);
            categoria.Property(p => p.descripcion);
        });

        modelBuilder.Entity<Tarea>(tarea =>
        {
            tarea.ToTable("Tarea");
            tarea.HasKey(t => t.TareaId);
            tarea.HasOne(t => t.Categoria).WithMany(p => p.Tareas).HasForeignKey(p => p.CategoriaId);
            tarea.Property(t=>t.titulo).IsRequired().HasMaxLength(200);
            tarea.Property(t=>t.descripcion);
            tarea.Property(t=>t.PrioridadTarea);
            tarea.Property(t=>t.FechaCreacion);
            tarea.Ignore(p=> p.Resumen);


        });
    }

}