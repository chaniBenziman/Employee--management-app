using AutoMapper;
using EmployeesManagement.Core.Models;
using EmployeesManagement.Core.Services;
using EmployeesManagement.Models;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EmployeesManagementServer.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PositionsController : ControllerBase
    {
        private readonly IPositionService _positionService;
        private readonly IMapper _mapper;

        public PositionsController(IPositionService positionService, IMapper mapper)
        {
            _positionService = positionService;
            _mapper = mapper;
        }
        // GET: api/<PositionsController>
        [HttpGet]
        public async Task<IEnumerable<Position>> Get()
        {
            return await _positionService.GetPositionsAsync();
        }
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] PositionPostModel position)
        {
            var newPosition = await _positionService.AddPositionAsync(_mapper.Map<Position>(position));
            return Ok(newPosition);
        }
    }
}
