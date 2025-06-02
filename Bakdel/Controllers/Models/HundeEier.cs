namespace Bakdel.Contorllers.Models;

public class HundeEier
{
    public int id { get; set; }
    public required string brukernavn { get; set; }
    public required string rolle { get; set; }
    public required string telefon { get; set; }
    public required string adresse { get; set; }
    public int hundeID { get; set; }
}