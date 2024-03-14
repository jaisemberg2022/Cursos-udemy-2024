using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using proyectoef;


var builder = WebApplication.CreateBuilder(args);
//builder.Services.AddDbContext<TareasContext>(p => p.UseInMemoryDatabase("TareasDb"));
builder.Services.AddSqlServer<TareasContext>("Data Source=DSN-314;initial catalog=TareasDb;user id=sa;password=Jatoro@1803;TrustServerCertificate=True");
var app = builder.Build();


app.MapGet("/", () => "Hello World!");
app.MapGet(pattern: "/dbconexion",async ([FromServices] TareasContext dbContext) =>{
    dbContext.Database.EnsureCreated();
    return Results.Ok("base de datos en memoria: " + dbContext.Database.IsInMemory());
});
app.Run();
