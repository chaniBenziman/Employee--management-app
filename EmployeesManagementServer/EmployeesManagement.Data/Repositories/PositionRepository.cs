using EmployeesManagement.Core.Models;
using EmployeesManagement.Core.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeesManagement.Data.Repositories
{
    public class PositionRepository:IPositionRepository
    {
        private readonly DataContext _context;
        public PositionRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Position> AddPositionAsync(Position position)
        {
            _context.Positions.AddAsync(position);
            await _context.SaveChangesAsync();
            return position;
        }

        public async Task<IEnumerable<Position>> GetPositionsAsync()
        {
            return await _context.Positions.ToListAsync();
        }


    }
}
