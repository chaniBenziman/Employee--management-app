using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EmployeesManagement.Data.Migrations
{
    /// <inheritdoc />
    public partial class updatedatabase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PositionsEmployee_Employees_EmployeeId",
                table: "PositionsEmployee");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddForeignKey(
                name: "FK_PositionsEmployee_Employees_EmployeeId",
                table: "PositionsEmployee",
                column: "EmployeeId",
                principalTable: "Employees",
                principalColumn: "EmployeeId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
