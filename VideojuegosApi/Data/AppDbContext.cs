using Microsoft.EntityFrameworkCore;
using VideojuegosApi.Models;

namespace VideojuegosApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Videojuego> Videojuegos { get; set; }
    }
}