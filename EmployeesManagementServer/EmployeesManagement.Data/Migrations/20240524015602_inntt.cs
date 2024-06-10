using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EmployeesManagement.Data.Migrations
{
    /// <inheritdoc />
    public partial class inntt : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Employees",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddForeignKey(
                name: "FK_PositionsEmployee_Employees_EmployeeId",
                table: "PositionsEmployee",
                column: "EmployeeId",
                principalTable: "Employees",
                principalColumn: "EmployeeId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PositionsEmployee_Employees_EmployeeId",
                table: "PositionsEmployee");

            migrationBuilder.DropColumn(
                name: "Password",
                table: "Employees");
        }
    }
}
