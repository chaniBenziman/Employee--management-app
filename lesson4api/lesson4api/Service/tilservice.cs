using lesson4api.model;
namespace lesson4api.Service
{
    public class tilservice
    {
        public bool Add(Til til)
        {
            data.dataservice.Add(til);
            return true;
        }
        public tilservice()
        {

        }
        public Til GetById(string id)
        {
            return data.dataservice.Where(t => t.PatriotMissile == id).First();
        }
        public IEnumerable<location> GetLocation()
        {
            List<location> locations = new List<location>();
 
            data.dataservice.ForEach(t=>locations.Add(t.Location)); 
            return locations;
        }
        public IEnumerable<Til> GetByLocation(location location)
        {
           
            return data.dataservice.Where(t => t.Location == location).ToList();
        }
        public IEnumerable<Til> GetTilimList()
        {
            return data.dataservice;
        }


    }
}
