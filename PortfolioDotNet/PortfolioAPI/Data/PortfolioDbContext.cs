using Microsoft.EntityFrameworkCore;

namespace PortfolioAPI.Data;

public class PortfolioDbContext : DbContext
{
    public PortfolioDbContext(DbContextOptions<PortfolioDbContext> options) : base(options) { }

    public DbSet<Email> Emails => Set<Email>();
}

