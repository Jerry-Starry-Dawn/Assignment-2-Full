using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Repository.Entities;

namespace Repository.Persistence.Configurations;

public class UserConfigurations : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Id).ValueGeneratedOnAdd();

        builder.HasOne(x => x.Publisher)
            .WithMany(x => x.Users)
            .IsRequired()
            .HasForeignKey("PublisherId");

        builder.HasOne(x => x.Role).WithMany(x => x.Users).IsRequired().HasForeignKey("RoleId");

        builder.Property(x => x.Email).IsRequired();
        builder.Property(x => x.Password).IsRequired();
        builder.Property(x => x.Source).IsRequired();
        builder.Property(x => x.FirstName).IsRequired();
        builder.Property(x => x.LastName).IsRequired();
        builder.Property(x => x.MiddleName).IsRequired();
        builder.Property(x => x.HiredDate).IsRequired();
    }
}