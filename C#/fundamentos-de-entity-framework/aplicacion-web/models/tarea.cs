using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace proyectoef.Models;

public class Tarea
{
    [Key]
    public Guid TareaId { get; set; }
    [ForeignKey("categoriaId")]
    public Guid CategoriaId { get; set; }
    [Required]
    [MaxLength(length: 150)]
    public string titulo { get; set; }
    public string descripcion { get; set; }
    public int MyProperty { get; set; }
    public Prioridad PrioridadTarea { get; set; }

    public DateTime FechaCreacion { get; set; }

    public virtual Categoria Categoria { get; set; }
    public string Resumen { get; set; }

}


public enum Prioridad
{
    Baja,
    Media,
    Alta
}