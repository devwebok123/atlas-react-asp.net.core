using Microsoft.EntityFrameworkCore.Migrations;

namespace Atlas.Web.Core.Migrations
{
    public partial class updatedOrgMember : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "OrganizationMembers",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "OrganizationMembers");
        }
    }
}
