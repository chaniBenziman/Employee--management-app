using EmployeesManagement.Core.Models;
using EmployeesManagement.Core.Repositories;
using EmployeesManagement.Core.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeesManagement.Service.Services
{
    public class PositionEmployeeService:IPositionEmployeeService
    {
        private readonly IPositionEmployeeRepository _positionEmployeeRepository;
        public PositionEmployeeService(IPositionEmployeeRepository positionEmployeeRepository)
        {
            _positionEmployeeRepository = positionEmployeeRepository;
        }
        public async Task<PositionEmployee> AddPositionToEmployeeAsync(int EmployeeId, PositionEmployee positionEmployee)
        {
            positionEmployee.EmployeeId = EmployeeId;
            return await _positionEmployeeRepository.AddPositionToEmployeeAsync(positionEmployee);
        }
        public async Task<bool> DeletePositionOfEmployeeAsync(int employeeId, int positionId)
        {
            return await _positionEmployeeRepository.DeletePositionOfEmployeeAsync(employeeId, positionId);
        }
        public async Task<IEnumerable<PositionEmployee>> GetEmployeePositionsAsync(int employeeId)
        {
            return await _positionEmployeeRepository.GetEmployeePositionsAsync(employeeId);
        }
        public async Task<PositionEmployee> UpdatePositionToEmployeeAsync(int employeeId, int positionId, PositionEmployee positionEmployee)
        {
            return await _positionEmployeeRepository.UpdatePositionToEmployeeAsync(employeeId, positionId, positionEmployee);
        }
    }
}
