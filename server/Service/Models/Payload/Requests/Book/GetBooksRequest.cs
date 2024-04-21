namespace Service.Models.Payload.Requests.Book;

public class GetBooksRequest : PaginatedQueryParams
{
    public double Price { get; set; }
}