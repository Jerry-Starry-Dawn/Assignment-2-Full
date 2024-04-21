using Repository.Entities;
using Service.Common.Mapping;

namespace Service.Models.Models;

public class RoleModel : BaseModel, IMapFrom<Role>
{
    public string Description { get; set; }
}