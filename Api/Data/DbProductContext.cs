using Microsoft.EntityFrameworkCore;

public class DbProductContext : DbContext
{
    public DbProductContext(DbContextOptions<DbProductContext> options) : base(options){}

    public DbSet<Product> Products{get;set;}
}