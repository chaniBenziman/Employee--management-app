using EmployeesManagement.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeesManagement.Core.Services
{
    public interface IPositionService
    {
        Task<IEnumerable<Position>> GetPositionsAsync();
        Task<Position> AddPositionAsync(Position position);

    }
}
