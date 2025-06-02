namespace Bakdel.Contorllers.Models;

public class Bruker
{
    public int id { get; set; }
    public required string brukernavn { get; set; }
    public required string passord { get; set; }
}