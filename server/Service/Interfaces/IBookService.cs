using Service.Models;
using Service.Models.Models;
using Service.Models.Payload.Requests.Book;

namespace Service.Interfaces;

public interface IBookService
{
    Task<PaginatedList<BookModel>> GetBooks(GetBooksRequest request);
    Task<BookModel> GetBookById(int id);
    Task<BookModel> CreateBook(CreateBookRequest request);
    Task<BookModel> UpdateBook(int id, UpdateBookRequest request);
    Task<BookModel> DeleteBook(int id);
}