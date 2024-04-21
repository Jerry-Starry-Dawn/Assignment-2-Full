namespace Repository.Entities;

public class BookAuthor : BaseEntity
{
    public int AuthorId { get; set; }
    public int BookId { get; set; }
    public string AuthorOrder { get; set; }
    public double RoyaltyPercentage { get; set; }
    
    // Navigation properties
    public Author Author { get; set; }
    public Book Book { get; set; }
}