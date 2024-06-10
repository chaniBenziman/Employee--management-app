using AutoMapper;
using EmployeesManagement.Core.DTO;
using EmployeesManagement.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeesManagement.Core.Mapping
{
    public class MappingProfile: Profile
    {

        public MappingProfile()
        {
            CreateMap<Employee, EmployeeDTO>().ReverseMap();
            CreateMap<Position, PositionDTO>().ReverseMap();
            CreateMap<PositionEmployee, PositionEmployeeDTO>().ReverseMap();

        }
    }
}
