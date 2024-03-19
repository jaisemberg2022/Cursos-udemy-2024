using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
namespace proyectoef.Models;

public class Categoria
{
    [Key]
    public Guid categoriaId { get; set; }
    [Required]
    [MaxLength(150)]
    public string nombre { get; set; }
    public string descripcion { get; set; }
    public int peso { get; set; }
    [JsonIgnore]
    public virtual ICollection<Tarea> Tareas {get;set;}
    
}