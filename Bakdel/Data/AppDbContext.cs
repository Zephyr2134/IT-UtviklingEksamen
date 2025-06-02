using Microsoft.EntityFrameworkCore;
using Bakdel.Contorllers.Models;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }

    public DbSet<Bruker> Brukere { get; set; }
    public DbSet<Hund> Hunder { get; set; }
    public DbSet<HundeEier> HundeEiere { get; set; }
    public DbSet<HundePasser> HundePassere { get; set; }
    public DbSet<Foresporsel> Foresporsler { get; set; }
}
