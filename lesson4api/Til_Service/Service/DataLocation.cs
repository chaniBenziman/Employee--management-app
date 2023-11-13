using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Til_Model;
using Til_Model.model;

namespace Til_Service.Service
{
    public class DataLocation : ItilRepository
    {
        readonly Til_context _til_Context;
        public DataLocation(Til_context til_Context)
        {
            _til_Context = til_Context;
        }

        public List<location> GetTils() => _til_Context.Location.ToList();


    }
}
