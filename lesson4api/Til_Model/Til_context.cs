using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Til_Model.model;

namespace Til_Model
{
    public class Til_context : DbContext
    {
        public Til_context(DbContextOptions<Til_context> options) : base(options)
        {

        }
        public DbSet<location> Location { get; set; }
    }
}
