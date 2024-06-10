using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace EmployeesManagement.Core.Models
{
    public enum Gender
    {
        Male,
        Female
    }
    public class Employee
    {
        public int EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Identity { get; set; }
        public string Password { get; set; }
        public DateTime BirthDate { get; set; }
        public Gender Gender { get; set; }
        public DateTime EntryDate { get; set; }
        public bool StatusActive { get; set; }
        public  List<PositionEmployee> PositionEmployees { get; set; }
        public Employee()
        {
            StatusActive = true;
        }
    }
}
