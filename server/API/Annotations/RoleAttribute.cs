using Microsoft.AspNetCore.Mvc.Filters;

namespace API.Annotations;

public class RoleAttribute : Attribute , IAuthorizationFilter
{
    public int Role { get; set; }

    public RoleAttribute()
    {
        this.Role = 0;
    }

    public void OnAuthorization(AuthorizationFilterContext context)
    {
        var role = context.HttpContext.Session.GetInt32("role");

        if (role is null)
        {
            throw new InvalidOperationException("unauthorized");
        }

        if (role != Role)
        {
            throw new InvalidOperationException("unauthorized");
        }
    }
}