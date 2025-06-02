interface Hund
{
  id: number;
  navn: string;
  rase: string;
  alder: number;
  spesielleBehov: string;
}

interface HundeEier
{
  id: number;
  navn: string;
  telefon: string;
  email: string;
  adresse: string;
  hund: Hund;
}

interface HundePasser
{
  id: number;
  navn: string;
  telefon: string;
  email: string;
  pris: number;
  omraade: string;
}

interface Foresporsel
{
  id: number;
  eier: HundeEier;
  passer: HundePasser;
  dato: Date;
  instruksjoner: string;
  akseptert: boolean;
}

interface Bruker
{
  id: number;
  brukernavn: string;
  passord: string;
  rolle: string;
}

interface props {
    aktivBruker: Bruker;
    foresporsler: Foresporsel[];
}

const Foresporsler = ({aktivBruker, foresporsler}:props) => {
  return (
    <div className="foresporsler">
      {aktivBruker?.rolle === "eier"
        ? foresporsler.map((f) => (
            <div key={f.id} className="foresporsel">
              <h1>{f.passer.navn}</h1>
              <h1>{f.dato.getDate().toString()}</h1>
              <h1>{f.passer.pris}</h1>
              <h1>{f.akseptert ? "akseptert" : "venter"}</h1>
            </div>
          ))
        : foresporsler.map((f) => (
        <div key={f.id} className="foresporsel">
            <h1>{f.eier.navn}</h1>
            <h1>{f.eier.hund.navn} {f.eier.hund.alder}</h1>
            <h1>{f.dato.getDate().toString()}</h1>
            {f.akseptert ? 
            <button className="avbrytKnapp">Avbryt</button>
            : <button className="aksepterKnapp">Aksepter</button>}
        </div>
    ))}
    </div>
  );
};

export default Foresporsler;
