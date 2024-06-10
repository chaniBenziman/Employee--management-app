using EmployeesManagement.Core.Models;

namespace EmployeesManagement.Core.DTO
{
    public class EmployeeDTO
    {
        public int EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Identity { get; set; }
        public string Password { get; set; }
        public DateTime BirthDate { get; set; }
        public Gender Gender { get; set; }
        public DateTime EntryDate { get; set; }
        public bool IsActive { get; set; }
        public List<PositionEmployee> PositionEmployees { get; set; }


    }
}
