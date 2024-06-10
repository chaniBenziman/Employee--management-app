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
    public class PositionEmployeeRepository:IPositionEmployeeRepository
    {
        private readonly DataContext _context;
        public PositionEmployeeRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<PositionEmployee> AddPositionToEmployeeAsync(PositionEmployee positionEmployee)
        {
            await _context.PositionsEmployee.AddAsync(positionEmployee);
            _context.SaveChanges();
            return positionEmployee;
        }
        public async Task<PositionEmployee> UpdatePositionToEmployeeAsync(int employeeId, int positionId, PositionEmployee positionEmployee)
        {
            var position = await _context.PositionsEmployee.FirstOrDefaultAsync(e => e.PositionId == positionId && e.EmployeeId == employeeId);
            if (position == null)
            {
                return null;
            }
            position.IsManagement = positionEmployee.IsManagement;
            position.EntryDate = positionEmployee.EntryDate;
            await _context.SaveChangesAsync();
            return position;
        }

        public async Task<bool> DeletePositionOfEmployeeAsync(int employeeId, int positionId)
        {
            var positionEmployee = await _context.PositionsEmployee.FirstOrDefaultAsync(e => e.EmployeeId == employeeId && e.PositionId == positionId);

            if (positionEmployee != null)
            {
                positionEmployee.StatusActive = false;
                await _context.SaveChangesAsync();
                return true; // המחיקה והעדכון בוצעו בהצלחה
            }

            return false; // העובד לא נמצא במסד הנתונים
        }
        public async Task<IEnumerable<PositionEmployee>> GetEmployeePositionsAsync(int employeeId)
        {
            return await _context.PositionsEmployee.Where(e => e.EmployeeId == employeeId && e.StatusActive).ToListAsync();
        }

    }
}
