using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using proyectoef;
using proyectoef.Models;


var builder = WebApplication.CreateBuilder(args);
//builder.Services.AddDbContext<TareasContext>(p => p.UseInMemoryDatabase("TareasDb"));
builder.Services.AddSqlServer<TareasContext>(builder.Configuration.GetConnectionString("cnTareas"));
var app = builder.Build();


app.MapGet("/", () => "Hello World!"); 

app.MapGet(pattern: "/dbconexion",async ([FromServices] TareasContext dbContext) =>{
    dbContext.Database.EnsureCreated();
    return Results.Ok("base de datos en memoria: " + dbContext.Database.IsInMemory());
});

app.MapGet("/api/tareas",async ([FromServices] TareasContext dbContext)=>{
    return Results.Ok(dbContext.tareas
    .Include(p => p.Categoria)
    .Where(p => p.PrioridadTarea == Prioridad.Baja));
});

app.MapPost("/api/tareas",async ([FromServices] TareasContext dbContext,[FromBody] Tarea tarea)=>{
    
    tarea.TareaId = Guid.NewGuid();
    tarea.FechaCreacion = DateTime.Now;
    await dbContext.AddAsync(tarea);

    await dbContext.SaveChangesAsync();
    return Results.Ok();
});

app.Run();
