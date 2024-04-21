namespace Repository.Entities;

public class Publisher : BaseEntity
{
    public string Name { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Country { get; set; }
    
    // Navigations
    public ICollection<User> Users { get; set; }
    public ICollection<Book> Books { get; set; }
}