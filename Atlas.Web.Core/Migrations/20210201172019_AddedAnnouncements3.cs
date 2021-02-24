using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Atlas.Web.Core.Migrations
{
    public partial class AddedAnnouncements3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrganizationGroups_Announcements_AnnouncementId",
                table: "OrganizationGroups");

            migrationBuilder.DropForeignKey(
                name: "FK_OrganizationMembers_Announcements_AnnouncementId",
                table: "OrganizationMembers");

            migrationBuilder.DropIndex(
                name: "IX_OrganizationMembers_AnnouncementId",
                table: "OrganizationMembers");

            migrationBuilder.DropIndex(
                name: "IX_OrganizationGroups_AnnouncementId",
                table: "OrganizationGroups");

            migrationBuilder.DropColumn(
                name: "AnnouncementId",
                table: "OrganizationMembers");

            migrationBuilder.DropColumn(
                name: "AnnouncementId",
                table: "OrganizationGroups");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "AnnouncementId",
                table: "OrganizationMembers",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "AnnouncementId",
                table: "OrganizationGroups",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_OrganizationMembers_AnnouncementId",
                table: "OrganizationMembers",
                column: "AnnouncementId");

            migrationBuilder.CreateIndex(
                name: "IX_OrganizationGroups_AnnouncementId",
                table: "OrganizationGroups",
                column: "AnnouncementId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrganizationGroups_Announcements_AnnouncementId",
                table: "OrganizationGroups",
                column: "AnnouncementId",
                principalTable: "Announcements",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_OrganizationMembers_Announcements_AnnouncementId",
                table: "OrganizationMembers",
                column: "AnnouncementId",
                principalTable: "Announcements",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
