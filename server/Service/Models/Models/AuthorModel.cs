using Repository.Entities;
using Service.Common.Mapping;

namespace Service.Models.Models;

public class AuthorModel : BaseModel, IMapFrom<Author>
{
    public string LastName { get; set; }
    public string FirstName { get; set; }
    public string Phone { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Zip { get; set; }
    public string Email { get; set; }
    
    // Navigations Properties
    public ICollection<BookAuthorModel> BookAuthors { get; set; }
}