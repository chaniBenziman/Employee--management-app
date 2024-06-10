using EmployeesManagement.Core.Models;

namespace EmployeesManagement.Models
{
    public class EmployeePostModel
    {
        
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Identity { get; set; }
        public string Password { get; set; }
        public DateTime BirthDate { get; set; }
        public Gender Gender { get; set; }
        public DateTime EntryDate { get; set; }
        public IEnumerable<PositionEmployeePostModel> PositionEmployees { get; set; }
    }
}
