using Repository.Entities;
using Service.Common.Mapping;

namespace Service.Models.Models;

public class PublisherModel : BaseModel, IMapFrom<Publisher>
{
    public string Name { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Country { get; set; }
    
    // Navigations
    public ICollection<UserModel> Users { get; set; }
    public ICollection<BookModel> Books { get; set; }
}
