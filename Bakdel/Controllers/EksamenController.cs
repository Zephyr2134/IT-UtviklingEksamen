using Microsoft.AspNetCore.Mvc;
using Bakdel.Contorllers.Models;
using Microsoft.EntityFrameworkCore;
namespace back.Controllers;

[ApiController]
[Route("[controller]")]
public class EksamenController : ControllerBase
{

    private readonly AppDbContext _context;

    public EksamenController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost("/Login")]
    public async Task<ActionResult> Login([FromBody] Bruker loggInn)
    {
        var bruker = await _context.Brukere.FirstOrDefaultAsync(bruker => bruker.brukernavn == loggInn.brukernavn);
        if(bruker != null){
            HundeEier eier = new HundeEier { id = 1, brukernavn = "noe", rolle = "eier", adresse = "noe", telefon = "999999", hundeID = 1 };
            return Ok(eier);
        }
        return BadRequest();
    }
}
