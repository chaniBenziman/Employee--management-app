using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Til_Model.model
{
    [Table("Location")]
    public class location
    {
        [Key]
        [Required]  

        public string City { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        [MaxLength(50)]
        public string Location { get; set; }
    }
}
