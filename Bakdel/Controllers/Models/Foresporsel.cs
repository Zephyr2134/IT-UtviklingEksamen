namespace Bakdel.Contorllers.Models;

public class Foresporsel
{
    public int id { get; set; }
    public int eierID { get; set; }
    public int passerID { get; set; }
    public required DateTime dato { get; set; }
    public required bool akseptert { get; set; }
}