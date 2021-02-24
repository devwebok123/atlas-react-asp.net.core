using Microsoft.EntityFrameworkCore.Migrations;

namespace Atlas.Web.Core.Migrations
{
    public partial class Staff : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Phone",
                table: "OrganizationMembers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "OrganizationMembers",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Phone",
                table: "OrganizationMembers");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "OrganizationMembers");
        }
    }
}
