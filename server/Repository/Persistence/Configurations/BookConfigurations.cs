using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Repository.Entities;

namespace Repository.Persistence.Configurations;

public class BookConfigurations : IEntityTypeConfiguration<Book>
{
    public void Configure(EntityTypeBuilder<Book> builder)
    {
        builder.HasKey(x => x.Id);
        builder.HasOne(x => x.Publisher)
            .WithMany(x => x.Books)
            .IsRequired()
            .HasForeignKey("PublisherId");

        builder.Property(x => x.Title).IsRequired();
        builder.Property(x => x.Type).IsRequired();
        builder.Property(x => x.Price).IsRequired();
        builder.Property(x => x.Advance).IsRequired();
        builder.Property(x => x.Royalty).IsRequired();
        builder.Property(x => x.ytdSales).IsRequired();
        builder.Property(x => x.Notes).IsRequired();
        builder.Property(x => x.PublishedDate).IsRequired();
    }
}