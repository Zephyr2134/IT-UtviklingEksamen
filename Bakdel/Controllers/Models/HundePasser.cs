namespace Bakdel.Contorllers.Models;

public class HundePasser
{
    public int id { get; set; }
    public required string brukernavn { get; set; }
    public required string rolle { get; set; }
    public required string telefon { get; set; }
    public int pris { get; set; }
    public required string omraade { get; set; }

}