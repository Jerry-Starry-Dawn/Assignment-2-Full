namespace Repository.Entities;

public class Role : BaseEntity
{
    public string Description { get; set; }
    
    // Navigation properties
    public ICollection<User> Users { get; set; }
}