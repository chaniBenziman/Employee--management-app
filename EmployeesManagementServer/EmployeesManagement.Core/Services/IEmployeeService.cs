using EmployeesManagement.Core.DTO;
using EmployeesManagement.Core.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeesManagement.Core.Services
{
    public interface IEmployeeService
    {
        Task<IEnumerable<EmployeeDTO>> GetEmployeesAsync();
        Task<EmployeeDTO> GetEmployeeByIdAsync(int id);
        Task<Employee> AddEmployeeAsync(Employee employee);
        Task<Employee> UpdateEmployeeAsync(int id, Employee employee);
        Task<bool> DeleteEmployeeAsync(int id);
        public Task <bool> GetByEmployeeNameAndPassword(string employeeFirstName, string employeeLastName, string employeePassword);
    }
}
