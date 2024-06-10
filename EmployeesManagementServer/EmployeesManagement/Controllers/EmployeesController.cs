using AutoMapper;
using EmployeesManagement.Core.Models;
using EmployeesManagement.Core.Services;
using EmployeesManagement.Core.DTO;
using EmployeesManagement.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EmployeesManagementServer.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
   
    public class EmployeesController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;
        private readonly IPositionEmployeeService _positionEmployeeService;
        private readonly IMapper _mapper;
        public EmployeesController(IEmployeeService employeeService, IPositionEmployeeService positionEmployeeService, IMapper mapper)
        {
            _employeeService = employeeService;
            _positionEmployeeService = positionEmployeeService;
            _mapper = mapper;

        }
        // GET: api/<EmployeesController>
        [HttpGet]
        public async Task<IEnumerable<EmployeeDTO>> Get()
        {
            return await _employeeService.GetEmployeesAsync();
        }

        // GET api/<EmployeesController>/5
        [HttpGet("{id}")]
        public async Task<EmployeeDTO> Get(int id)
        {
            return await _employeeService.GetEmployeeByIdAsync(id);
        }

        // POST api/<EmployeesController>
        [HttpPost]
        [Authorize]
        public async Task<ActionResult> Post([FromBody] EmployeePostModel employee)
        {
            var newEmployee = await _employeeService.AddEmployeeAsync(_mapper.Map<Employee>(employee));
            return Ok(newEmployee);
        }

        // PUT api/<EmployeesController>/5
        [HttpPut("{id}")]
        [Authorize]
        public async Task<ActionResult> Put(int id, [FromBody] EmployeePostModel employee)
        {
            var updateEmployee = await _employeeService.UpdateEmployeeAsync(id, _mapper.Map<Employee>(employee));
            return Ok(updateEmployee);
        }

        // DELETE api/<EmployeesController>/5
        [HttpDelete("{id}")]
        public async Task<bool> Delete(int id)
        {
            return await _employeeService.DeleteEmployeeAsync(id);
        }
        //position
        [HttpGet("{id}/position")]
        public async Task<ActionResult<PositionEmployee>> GetEmployeePositions(int id)
        {
            var positionEmployee = await _positionEmployeeService.GetEmployeePositionsAsync(id);
            if (positionEmployee == null)
            {
                return NotFound();
            }
            return Ok(positionEmployee);
        }

        // POST api/<EmployeesController>
        [HttpPost("{id}/position")]
        public async Task<ActionResult<PositionEmployee>> AddPosition(int id, [FromBody] PositionEmployeePostModel employeePosition)
        {
            var newEmployeePosition = await _positionEmployeeService.AddPositionToEmployeeAsync(id, _mapper.Map<PositionEmployee>(employeePosition));
            if (newEmployeePosition == null)
            {
                return NotFound();
            }
            return Ok(newEmployeePosition);
        }

        // PUT api/<EmployeesController>/5
        [HttpPut("{id}/positions/{positionId}")]
        public async Task<ActionResult> Put(int employeeId, int positionId, [FromBody] PositionEmployeePostModel PositionEmployee)
        {
            var updateEmployeePosition = await _positionEmployeeService.UpdatePositionToEmployeeAsync(employeeId, positionId, _mapper.Map<PositionEmployee>(PositionEmployee));
            if (updateEmployeePosition == null)
            {
                return NotFound();
            }
            return Ok(updateEmployeePosition);
        }
        [HttpDelete("{id}/position/{positionId}")]

        public async Task<IActionResult> DeletePosition(int employeeId, int positionId)
        {
            var result = await _positionEmployeeService.DeletePositionOfEmployeeAsync(employeeId, positionId);
            if (!result)
            {
                return NotFound();
            }
            return Ok(result);
        }
    }
}
