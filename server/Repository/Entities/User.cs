namespace Repository.Entities;

public class User : BaseEntity
{
    public string Email { get; set; }
    public string Password { get; set; }
    public string Source { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string MiddleName { get; set; }
    public int RoleId { get; set; }
    public int PublisherId { get; set; }
    public DateTime HiredDate { get; set; }
    
    // Navigation properties
    public Role Role { get; set; }
    public Publisher Publisher { get; set; }
}