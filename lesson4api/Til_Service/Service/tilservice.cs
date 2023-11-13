using Til_Model.model;
namespace Til_Service.Service
{
    public class tilservice
    {
        public tilservice( )
        {

        }
        public bool Add(Til til)
        {
            data.dataservice.Add(til);
            return true;
        }
        public Til GetTil(string id)
        {
            return data.dataservice.Where(t => t.PatriotMissile == id).First();
        }
        public IEnumerable<location> GetLocation()
        {
            List<location> locations = new List<location>();

            data.dataservice.ForEach(t => locations.Add(t.Location));
            return locations;
        }
        public IEnumerable<Til> GetByLocation(string city)
        {

            return data.dataservice.Where(t => t.Location.City == city).ToList();
        }
        public IEnumerable<Til> GetTilimList()
        {
            return data.dataservice;
        }


    }
}
