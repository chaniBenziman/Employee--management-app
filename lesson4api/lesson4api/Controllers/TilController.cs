using Til_Model.model;
using Microsoft.AspNetCore.Mvc;
using Til_Service.Service;

namespace lesson4api.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class TilController : ControllerBase
    {
        readonly tilservice _service;

        public TilController(tilservice service)
        {
            _service = service;
        }
        [HttpGet]
        public IEnumerable<Til> Get()
        {
            return _service.GetTilimList();
        }
        [HttpPost]
        public void post(Til til)
        {
            if (!(_service.GetTilimList().Contains(til)))
            {
                _service.Add(til);
            }

        }
        [HttpGet]
        [Route("GetLocation")]
        public IEnumerable<location> GetLocation()
        {
            return _service.GetLocation();
        }
        [HttpGet]
        [Route("GetByLocation")]
        public IEnumerable<Til> GetByLocation(string city)
        {
            if (!(_service.GetTilimList().Select(t => t.Location.City == city).ToList().Any()))
                return _service.GetByLocation(city);
            return null;
        }
        [HttpGet]
        [Route("GetById")]
        public Til GetById(string id)
        {
            if (!(_service.GetTilimList().Select(t => t.PatriotMissile == id).ToList().Any()))
                return _service.GetTil(id);
            return null;
        }









    }
}
