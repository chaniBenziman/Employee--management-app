using Microsoft.AspNetCore.Authorization.Policy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Til_Model;
using Til_Model.model;
using Til_Service.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddScoped<tilservice>();
builder.Services.AddScoped<location>();
builder.Services.AddDbContext<Til_context>(option =>
{
    option.UseSqlServer(builder.Configuration.GetConnectionString("LocationConnectionString"));
}
   );
data data = new data();
builder.Services.AddSingleton(data);


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();
app.UseCors("AllowOrigin");
app.Run();
