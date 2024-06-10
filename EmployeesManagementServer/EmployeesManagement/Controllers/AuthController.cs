using EmployeesManagement.Core.Services;
using EmployeesManagement.Service.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EmployeesManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IEmployeeService _employeeService;
        public AuthController(IConfiguration configuration, IEmployeeService employeeService)
        {
            _employeeService = employeeService;
            _configuration = configuration;
        }

        [HttpPost]
        public IActionResult Login([FromBody] LoginModel loginModel)
        {
            var employee = _employeeService.GetByEmployeeNameAndPassword(loginModel.FirstName, loginModel.LastName, loginModel.Password);
            if (employee is not null)
            {
                var claims = new List<Claim>()
            {
                new Claim(ClaimTypes.Name, "Employee"),
                new Claim(ClaimTypes.Role, "Admin")
            };

                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetValue<string>("JWT:Key")));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                var tokeOptions = new JwtSecurityToken(
                    issuer: _configuration.GetValue<string>("JWT :Issuer"),
                    audience: _configuration.GetValue<string>("JWT:Audience"),
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(6),
                    signingCredentials: signinCredentials
                );
                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                return Ok(new { Token = tokenString });
            }
            return Unauthorized();
        }
    }

}
