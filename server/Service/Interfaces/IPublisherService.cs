using Service.Models;
using Service.Models.Models;
using Service.Models.Payload.Requests.Book;
using Service.Models.Payload.Requests.Publisher;

namespace Service.Interfaces;

public interface IPublisherService
{
    Task<PaginatedList<PublisherModel>> GetPublishers(GetPublisherRequest request);
    Task<PublisherModel> GetPublisherById(int id);
    Task<PublisherModel> CreatePublisher(CreatePublisherRequest request);
    Task<PublisherModel> UpdatePublisher(int id, UpdatePublisherRequest request);
    Task<PublisherModel> DeletePublisher(int id);
}