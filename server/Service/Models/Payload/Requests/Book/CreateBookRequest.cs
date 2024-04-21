namespace Service.Models.Payload.Requests.Book;

public class CreateBookRequest
{
    public string Title { get; set; }
    public string Type { get; set; }
    public int PublisherId { get; set; }
    public double Price { get; set; }
    public double Advance { get; set; }
    public double Royalty { get; set; }
    public double ytdSales { get; set; }
    public string Notes { get; set; }
    public string PublishedDate { get; set; }
    
    public int[] AuthorIds { get; set; }
}