using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace back.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Brukere",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    brukernavn = table.Column<string>(type: "TEXT", nullable: false),
                    passord = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Brukere", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "HundeEiere",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    brukernavn = table.Column<string>(type: "TEXT", nullable: false),
                    rolle = table.Column<string>(type: "TEXT", nullable: false),
                    telefon = table.Column<string>(type: "TEXT", nullable: false),
                    adresse = table.Column<string>(type: "TEXT", nullable: false),
                    hundeID = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HundeEiere", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "HundePassere",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    brukernavn = table.Column<string>(type: "TEXT", nullable: false),
                    rolle = table.Column<string>(type: "TEXT", nullable: false),
                    telefon = table.Column<string>(type: "TEXT", nullable: false),
                    pris = table.Column<int>(type: "INTEGER", nullable: false),
                    omraade = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HundePassere", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Hunder",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    navn = table.Column<string>(type: "TEXT", nullable: false),
                    rase = table.Column<string>(type: "TEXT", nullable: false),
                    alder = table.Column<int>(type: "INTEGER", nullable: false),
                    spesielleBehov = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Hunder", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Brukere");

            migrationBuilder.DropTable(
                name: "HundeEiere");

            migrationBuilder.DropTable(
                name: "HundePassere");

            migrationBuilder.DropTable(
                name: "Hunder");
        }
    }
}
