using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace aplicacion_web.Migrations
{
    public partial class InitialData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "descripcion",
                table: "Tarea",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "descripcion",
                table: "Categoria",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.InsertData(
                table: "Categoria",
                columns: new[] { "categoriaId", "descripcion", "nombre", "peso" },
                values: new object[] { new Guid("2b399f2a-3c7e-4ca5-a53d-dd893967001c"), null, "Actividades personales", 50 });

            migrationBuilder.InsertData(
                table: "Categoria",
                columns: new[] { "categoriaId", "descripcion", "nombre", "peso" },
                values: new object[] { new Guid("2b399f2a-3c7e-4ca5-a53d-dd893967099f"), null, "Actividades pendientes", 20 });

            migrationBuilder.InsertData(
                table: "Tarea",
                columns: new[] { "TareaId", "CategoriaId", "FechaCreacion", "MyProperty", "PrioridadTarea", "descripcion", "titulo" },
                values: new object[] { new Guid("2b399f2a-3c7e-4ca5-a53d-d33eeddee34d"), new Guid("2b399f2a-3c7e-4ca5-a53d-dd893967001c"), new DateTime(2024, 3, 15, 14, 46, 52, 337, DateTimeKind.Local).AddTicks(7116), 0, 2, null, "pago de hipoteca" });

            migrationBuilder.InsertData(
                table: "Tarea",
                columns: new[] { "TareaId", "CategoriaId", "FechaCreacion", "MyProperty", "PrioridadTarea", "descripcion", "titulo" },
                values: new object[] { new Guid("2b399f2a-3c7e-4ca5-a53d-dd893967033c"), new Guid("2b399f2a-3c7e-4ca5-a53d-dd893967099f"), new DateTime(2024, 3, 15, 14, 46, 52, 337, DateTimeKind.Local).AddTicks(7101), 0, 1, null, "pago de servicios publicos" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Tarea",
                keyColumn: "TareaId",
                keyValue: new Guid("2b399f2a-3c7e-4ca5-a53d-d33eeddee34d"));

            migrationBuilder.DeleteData(
                table: "Tarea",
                keyColumn: "TareaId",
                keyValue: new Guid("2b399f2a-3c7e-4ca5-a53d-dd893967033c"));

            migrationBuilder.DeleteData(
                table: "Categoria",
                keyColumn: "categoriaId",
                keyValue: new Guid("2b399f2a-3c7e-4ca5-a53d-dd893967001c"));

            migrationBuilder.DeleteData(
                table: "Categoria",
                keyColumn: "categoriaId",
                keyValue: new Guid("2b399f2a-3c7e-4ca5-a53d-dd893967099f"));

            migrationBuilder.AlterColumn<string>(
                name: "descripcion",
                table: "Tarea",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "descripcion",
                table: "Categoria",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);
        }
    }
}
