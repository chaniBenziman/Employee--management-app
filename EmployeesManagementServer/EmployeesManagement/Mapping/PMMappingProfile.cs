using AutoMapper;
using EmployeesManagement.Core.Models;
using EmployeesManagement.Models;

namespace EmployeesManagement.Mapping
{
    public class PMMappingProfile:Profile
    {
        public PMMappingProfile()
        {
            CreateMap<PositionPostModel, Position>().ReverseMap();
            CreateMap<EmployeePostModel, Employee>().ReverseMap();
            CreateMap<PositionEmployeePostModel, PositionEmployee>().ReverseMap();
        }
    }
}
