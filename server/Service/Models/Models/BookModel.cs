using AutoMapper;
using Repository.Entities;
using Service.Common.Mapping;

namespace Service.Models.Models;

public class BookModel : BaseModel, IMapFrom<Book>
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
    public PublisherModel Publisher { get; set; }
    public List<BookAuthorModel> BookAuthors { get; set; }
    
    public void Mapping(Profile profile)
    {
        profile.CreateMap<Book, BookModel>()
            .ForMember(dest => dest.PublisherId,
                opt => opt.MapFrom(src => src.Publisher.Id));
    }
}