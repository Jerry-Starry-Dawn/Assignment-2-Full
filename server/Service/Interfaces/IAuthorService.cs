using Service.Models;
using Service.Models.Models;
using Service.Models.Payload.Requests.Author;

namespace Service.Interfaces;

public interface IAuthorService
{
    Task<PaginatedList<AuthorModel>> GetAuthors(GetAuthorRequest request);
    Task<AuthorModel> GetAuthorById(int id);
    Task<AuthorModel> CreateAuthor(CreateAuthorRequest request);
    Task<AuthorModel> UpdateAuthor(int id, UpdateAuthorRequest request);
    Task<AuthorModel> DeleteAuthor(int id);
}