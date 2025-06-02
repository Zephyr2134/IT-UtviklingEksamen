namespace Bakdel.Contorllers.Models;

public class Hund
{
    public int id { get; set; }
    public required string navn { get; set; }
    public required string rase { get; set; }
    public int alder { get; set; }
    public required string spesielleBehov { get; set; }
}