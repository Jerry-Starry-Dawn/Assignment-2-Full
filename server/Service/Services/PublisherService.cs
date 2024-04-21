using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Repository.Entities;
using Repository.Interfaces;
using Service.Extensions;
using Service.Interfaces;
using Service.Models;
using Service.Models.Models;
using Service.Models.Payload.Requests.Publisher;

namespace Service.Services;

public class PublisherService : IPublisherService
{
    private readonly IUnitOfWork _uow;
    private readonly IRepository<Publisher> _publisherRepository;
    private readonly IMapper _mapper;

    public PublisherService(IUnitOfWork uow, IRepository<Publisher> publisherRepository, IMapper mapper)
    {
        _uow = uow;
        _publisherRepository = _uow.GetRequiredRepository<Publisher>();
        _mapper = mapper;
    }

    public async Task<PaginatedList<PublisherModel>> GetPublishers(GetPublisherRequest request)
    {
        var publishers = _publisherRepository.GetAll().Include(x => x.Books).AsQueryable();

        return await publishers.ListPaginateWithSortAsync<Publisher, PublisherModel>(
            request.Page,
            request.Size,
            request.SortBy,
            request.SortOrder,
            _mapper.ConfigurationProvider
        );
    }

    public async Task<PublisherModel> GetPublisherById(int id)
    {
        var publisher = await _publisherRepository
            .FindByCondition(x => x.Id == id)
            .Include(x => x.Books).FirstOrDefaultAsync();

        if (publisher is null)
        {
            throw new KeyNotFoundException("Publisher does not exist!");
        }

        return _mapper.Map<PublisherModel>(publisher);
    }

    public async Task<PublisherModel> CreatePublisher(CreatePublisherRequest request)
    {
        var entity = new Publisher()
        {
            City = request.City,
            Country = request.Country,
            State = request.State,
            Name = request.Name,
        };

        var result = await _publisherRepository.AddAsync(entity);
        await _uow.CommitAsync();

        return _mapper.Map<PublisherModel>(result);
    }

    public async Task<PublisherModel> UpdatePublisher(int id, UpdatePublisherRequest request)
    {
        var publisher = await _publisherRepository.GetByIdAsync(id);
        if (publisher is null)
        {
            throw new KeyNotFoundException("Publisher does not exist!");
        }

        publisher.City = request.City;
        publisher.Country = request.Country;
        publisher.State = request.State;
        publisher.Name = request.Name;

        var result = _publisherRepository.Update(publisher);
        await _uow.CommitAsync();

        return _mapper.Map<PublisherModel>(result);
    }

    public async Task<PublisherModel> DeletePublisher(int id)
    {
        var publisher = await _publisherRepository.GetByIdAsync(id);
        if (publisher is null)
        {
            throw new KeyNotFoundException("Publisher does not exists");
        }

        var result = _publisherRepository.Remove(id);
        await _uow.CommitAsync();

        return _mapper.Map<PublisherModel>(result);
    }
}