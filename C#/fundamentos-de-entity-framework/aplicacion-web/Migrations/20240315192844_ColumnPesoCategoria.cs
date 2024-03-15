using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace aplicacion_web.Migrations
{
    public partial class ColumnPesoCategoria : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "peso",
                table: "Categoria",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "peso",
                table: "Categoria");
        }
    }
}
