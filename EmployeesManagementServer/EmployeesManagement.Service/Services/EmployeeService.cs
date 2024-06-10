using AutoMapper;
using EmployeesManagement.Core.Models;
using EmployeesManagement.Core.Repositories;
using EmployeesManagement.Core.Services;
using EmployeesManagement.Core.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeesManagement.Service.Services
{
    public class EmployeeService:IEmployeeService
    {
        private readonly IMapper _mapper;
        private readonly IEmployeeRepository _employeeRepository;
        public EmployeeService(IEmployeeRepository employeeRepository, IMapper mapper)
        {
            _employeeRepository = employeeRepository;
            _mapper=mapper;
        }
        public async Task<Employee> AddEmployeeAsync(Employee employee)
        {
            var existingEmployees = await _employeeRepository.GetEmployeesAsync();
            if (existingEmployees.Any(e => e.Identity == employee.Identity))
            {
                return null;
            }

            return await _employeeRepository.AddEmployeeAsync(employee);
        }
        public async Task<bool> DeleteEmployeeAsync(int id)
        {
            return await _employeeRepository.DeleteEmployeeAsync(id);
        }

        public async Task<EmployeeDTO> GetEmployeeByIdAsync(int id)
        {
           var employee= await _employeeRepository.GetEmployeeByIdAsync(id);
           return _mapper.Map<EmployeeDTO>(employee);
        }

        public async Task<IEnumerable<EmployeeDTO>> GetEmployeesAsync()
        {
            var employee = await _employeeRepository.GetEmployeesAsync();
            return _mapper.Map<IEnumerable<EmployeeDTO>>(employee);
 
        }

        public async Task<Employee> UpdateEmployeeAsync(int id, Employee employee)
        {
            return await _employeeRepository.UpdateEmployeeAsync(id, employee);
        }
        public Task<bool> GetByEmployeeNameAndPassword(string employeeFirstName, string employeeLastName, string employeePassword)
        {
            return _employeeRepository.GetByEmployeeNameAndPassword(employeeFirstName, employeeLastName, employeePassword);
        }
    }
}
