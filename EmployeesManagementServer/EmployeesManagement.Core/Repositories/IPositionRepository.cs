using EmployeesManagement.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeesManagement.Core.Repositories
{
    public interface IPositionRepository
    {
        Task<IEnumerable<Position>> GetPositionsAsync();
        Task<Position> AddPositionAsync(Position position);
    }
}
