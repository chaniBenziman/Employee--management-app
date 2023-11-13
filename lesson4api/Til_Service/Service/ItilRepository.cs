using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Til_Model.model;

namespace Til_Service.Service
{
    internal interface ItilRepository
    {
        List<location> GetTils();
    }
}
