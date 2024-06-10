
namespace EmployeesManagement.Core.DTO
{
    public class PositionEmployeeDTO
    {
        public int EmployeeId { get; set; }
        public EmployeeDTO Employee { get; set; }
        public int PositionId { get; set; }
        public PositionDTO Position { get; set; }
        public DateTime EntryDate { get; set; }
        public bool IsManagement { get; set; }
        public bool IsActive { get; set; }
    }
}
