using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Repository.Entities;

namespace Repository.Persistence.Configurations;

public class BookAuthorConfigurations : IEntityTypeConfiguration<BookAuthor>
{
    public void Configure(EntityTypeBuilder<BookAuthor> builder)
    {
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Id).ValueGeneratedOnAdd();

        builder.HasOne(x => x.Author)
            .WithMany(x => x.BookAuthors)
            .IsRequired()
            .HasForeignKey("AuthorId");

        builder.HasOne(x => x.Book)
            .WithMany(x => x.BookAuthors)
            .IsRequired()
            .HasForeignKey("BookId");

        builder.Property(x => x.AuthorOrder).IsRequired();
        builder.Property(x => x.RoyaltyPercentage).IsRequired();
    }
}