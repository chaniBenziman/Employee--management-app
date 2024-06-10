using EmployeesManagement.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeesManagement.Core.Repositories
{
    public interface IPositionEmployeeRepository
    {
        Task<PositionEmployee> AddPositionToEmployeeAsync(PositionEmployee positionEmployee);
        Task<PositionEmployee> UpdatePositionToEmployeeAsync(int employeeId, int positionId, PositionEmployee positionEmployee);
        Task<bool> DeletePositionOfEmployeeAsync(int employeeId, int positionId);
        Task<IEnumerable<PositionEmployee>> GetEmployeePositionsAsync(int employeeId);
    }
}
