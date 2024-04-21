namespace Service.Models.Payload.Requests.Book;

public class UpdateBookRequest
{
    public string Title { get; set; }
    public string Type { get; set; }
    public double Price { get; set; }
    public double Advance { get; set; }
    public double Royalty { get; set; }
    public string Notes { get; set; }
}