using lesson4api.model;
using lesson4api.Service;
using Microsoft.AspNetCore.Mvc;

namespace lesson4api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TilController : ControllerBase
    {
        public TilController()
        {

        }
        tilservice tilservice = new tilservice();
        [HttpGet]
        public IEnumerable<Til> Get()
        {
            return tilservice.GetTilimList();
        }
        [HttpPost]
        public void post(Til til)
        {
            tilservice.Add(til);
        }
        [HttpGet]
        [Route("GetLocation")]
        public IEnumerable<location> GetLocation()
        {
            return tilservice.GetLocation();
        }
        [HttpGet]
        [Route("GetByLocation")]
        public IEnumerable<Til> GetByLocation(location location)
        {
            return tilservice.GetByLocation(location);
        }
        [HttpGet]
        [Route("GetById")]
        public Til GetById(string id)
        {
            return tilservice.GetById(id);
        }









    }
}
