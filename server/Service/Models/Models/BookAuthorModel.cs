using AutoMapper;
using Repository.Entities;
using Service.Common.Mapping;

namespace Service.Models.Models;

public class BookAuthorModel : BaseModel, IMapFrom<BookAuthor>
{
    public int AuthorId { get; set; }
    public int BookId { get; set; }
    public string AuthorOrder { get; set; }
    public double RoyaltyPercentage { get; set; }
    
    // Navigation properties
    public AuthorModel Author { get; set; }
    public BookModel Book { get; set; }
    
    public void Mapping(Profile profile)
    {
        profile.CreateMap<BookAuthor, BookAuthorModel>()
            .ForMember(dest => dest.AuthorId,
                opt => opt.MapFrom(src => src.Author.Id))
            .ForMember(dest => dest.BookId,
                opt => opt.MapFrom(src => src.Book.Id));
    }
}