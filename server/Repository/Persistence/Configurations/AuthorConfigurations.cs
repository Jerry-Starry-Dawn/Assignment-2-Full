using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Repository.Entities;

namespace Repository.Persistence.Configurations;

public class AuthorConfigurations : IEntityTypeConfiguration<Author>
{
    public void Configure(EntityTypeBuilder<Author> builder)
    {
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Id).ValueGeneratedOnAdd();
      
        builder.Property(x => x.LastName).IsRequired();
        builder.Property(x => x.FirstName).IsRequired();
        builder.Property(x => x.Phone).IsRequired();
        builder.Property(x => x.Address).IsRequired();
        builder.Property(x => x.City).IsRequired();
        builder.Property(x => x.State).IsRequired();
        builder.Property(x => x.Zip).IsRequired();
        builder.Property(x => x.Email).IsRequired();
        
    }
}