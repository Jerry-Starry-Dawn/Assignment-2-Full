using System.Text.Json.Serialization;
using API.Middlewares;
using API.Policies;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Repository;
using Service;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDistributedMemoryCache();

builder.Services.AddControllers(opt => opt.Conventions.Add(new RouteTokenTransformerConvention(new SlugifyParameterTransformer()))).AddJsonOptions(options => options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddRepositoryServices(builder.Configuration);
builder.Services.AddApplicationServices();
builder.Services.AddScoped<ExceptionMiddleware>();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI();


app.UseHttpsRedirection();
app.UseMiddleware<ExceptionMiddleware>();
app.UseAuthorization(); 

app.MapControllers();

app.Run();