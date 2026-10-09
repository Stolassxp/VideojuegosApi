using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VideojuegosApi.Data;
using VideojuegosApi.Models;

namespace VideojuegosApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VideojuegosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public VideojuegosController(AppDbContext context)
        {
            _context = context;
        }

        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Videojuego>>> GetVideojuegos()
        {
            return await _context.Videojuegos.ToListAsync();
        }

        
        [HttpGet("{id}")]
        public async Task<ActionResult<Videojuego>> GetVideojuego(int id)
        {
            var videojuego = await _context.Videojuegos.FindAsync(id);

            if (videojuego == null)
                return NotFound();

            return videojuego;
        }

        
        [HttpPost]
        public async Task<ActionResult<Videojuego>> PostVideojuego(Videojuego videojuego)
        {
            _context.Videojuegos.Add(videojuego);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetVideojuego), new { id = videojuego.Id }, videojuego);
        }

        
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVideojuego(int id, Videojuego videojuego)
        {
            if (id != videojuego.Id)
                return BadRequest();

            _context.Entry(videojuego).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}