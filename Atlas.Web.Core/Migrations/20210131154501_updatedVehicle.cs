using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Atlas.Web.Core.Migrations
{
    public partial class updatedVehicle : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "PrimaryDriverId",
                table: "Vehicles",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "ResponsibleForMaintenanceId",
                table: "Vehicles",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_PrimaryDriverId",
                table: "Vehicles",
                column: "PrimaryDriverId");

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_ResponsibleForMaintenanceId",
                table: "Vehicles",
                column: "ResponsibleForMaintenanceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Vehicles_OrganizationMembers_PrimaryDriverId",
                table: "Vehicles",
                column: "PrimaryDriverId",
                principalTable: "OrganizationMembers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Vehicles_OrganizationMembers_ResponsibleForMaintenanceId",
                table: "Vehicles",
                column: "ResponsibleForMaintenanceId",
                principalTable: "OrganizationMembers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Vehicles_OrganizationMembers_PrimaryDriverId",
                table: "Vehicles");

            migrationBuilder.DropForeignKey(
                name: "FK_Vehicles_OrganizationMembers_ResponsibleForMaintenanceId",
                table: "Vehicles");

            migrationBuilder.DropIndex(
                name: "IX_Vehicles_PrimaryDriverId",
                table: "Vehicles");

            migrationBuilder.DropIndex(
                name: "IX_Vehicles_ResponsibleForMaintenanceId",
                table: "Vehicles");

            migrationBuilder.DropColumn(
                name: "PrimaryDriverId",
                table: "Vehicles");

            migrationBuilder.DropColumn(
                name: "ResponsibleForMaintenanceId",
                table: "Vehicles");
        }
    }
}
