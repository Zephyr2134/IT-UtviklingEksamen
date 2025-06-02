interface HundePasser
{
  id:number;
  brukernavn:string;
  rolle:string;
  telefon:string;
  pris:number;
  omraade:string;
}

interface Hund
{
  id:number;
  navn:string;
  rase:string;
  alder:number;
  spesielleBehov:string;
}

interface HundeEier
{
  id:number;
  brukernavn:string;
  rolle:string;
  telefon:string;
  adresse:string;
  hundeID:number;
}

interface Bruker
{
  brukernavn:string;
  passord:string;
}

interface Foresporsel
{
  id:number;
  eierID:number;
  passerID:number;
  dato:Date;
  akseptert:boolean;
}

interface props
{
    aktivBruker:HundeEier|HundePasser|null;
    foresporsler:Foresporsel[];
    hundePassere:HundePasser[];
    hundeEiere:HundeEier[];
}

const Foresporsler = ({aktivBruker, foresporsler, hundePassere, hundeEiere}:props) => {
    return (
    <div className="HovedSide">
        {aktivBruker && aktivBruker.rolle === "eier" && <button>Legg til forespørsel</button>}
        {aktivBruker &&
        <div className="Foresporsler">
            {aktivBruker.rolle === "eier" ? 
            foresporsler.map(f=>f.eierID === aktivBruker.id && 
            <div className="Foresporsel">
                {hundePassere.map(passer=>passer.id === f.passerID && <h1>{passer.brukernavn}</h1>)}
                <h1>{f.dato.toString()}</h1>
                <h1>{f.akseptert ? "Akseptert" : "Venter"}</h1>
            </div>
        )
            : 
            foresporsler.map(f=>f.passerID === aktivBruker.id && 
            <div className="Foresporsel">
                {hundeEiere.map(eier=>eier.id === f.eierID && <h1>{eier.brukernavn}</h1>)}
                <h1>{f.dato.toString()}</h1>
                {f.akseptert ? <button className="AvbrytKnapp">Avbryt</button> : <button className="AksepterKnapp">Aksepter</button>}
            </div>
        )
            }
        </div>

        }
    </div>
);
}

export default Foresporsler;