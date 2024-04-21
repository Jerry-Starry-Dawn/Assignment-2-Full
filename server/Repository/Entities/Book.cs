namespace Repository.Entities;

public class Book : BaseEntity
{
    public string Title { get; set; }
    public string Type { get; set; }
    public int PublisherId { get; set; }
    public double Price { get; set; }
    public double Advance { get; set; }
    public double Royalty { get; set; }
    public double ytdSales { get; set; }
    public string Notes { get; set; }
    public DateTime PublishedDate { get; set; }
    
    // Navigation properties
    public Publisher Publisher { get; set; }
    public ICollection<BookAuthor> BookAuthors { get; set; }
}