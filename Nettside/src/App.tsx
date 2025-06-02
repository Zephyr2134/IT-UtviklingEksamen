import {useState} from 'react';
import LoggPaaSkjema from './komponenter/loggpaa';
import Foresporsler from './komponenter/foresporsler';

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

const App = () =>{

  const [loggetPaa, setLoggetPaa] = useState(false);
  const [brukernavn, setBrukernavn] = useState("");
  const [passord, setPassord] = useState("");
  const [lagerBruker, setLagerBruker] = useState(false);
  const [aktivBruker, setAktivBruker] = useState<HundeEier | HundePasser | null>(null);

  const [hundeEiere, setEiere] = useState<HundeEier[]>([]);
  const [hundePassere, setPassere] = useState<HundePasser[]>([]);
  const [hunder, setHunder] = useState<Hund[]>([]);
  const [foresporsler, setForesporsler] = useState<Foresporsel[]>([]);

  const Login = async() =>{
    try{
      const svar = await fetch("https://localhost:7039/Login", {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify({id:0, brukernavn:brukernavn, passord:passord}),
      });
      if(!svar.ok)
      {
        console.log("Kunne ikke logge inn");
      }else{
        const info = await svar.json() as HundeEier | HundePasser;
        setAktivBruker(info);
        setLoggetPaa(true);
      }
    }catch(e)
    {
      console.log(e);
    }
  }

  const LoggUt = () =>{
    setLoggetPaa(false);
    setBrukernavn("");
    setPassord("");
  }

  const LagBruker = () =>{

  }

  return (
  <>
  {loggetPaa && <button className="LoggUtKnapp" onClick={()=>LoggUt()}>Logg ut</button>}
  {loggetPaa ? <Foresporsler aktivBruker={aktivBruker} foresporsler={foresporsler} hundePassere={hundePassere} hundeEiere={hundeEiere} />:<LoggPaaSkjema brukernavn={brukernavn} passord={passord} setBrukernavn={setBrukernavn} setPassord={setPassord} Login={Login} lagerBruker={lagerBruker} setLagerBruker={setLagerBruker} LagBruker={LagBruker}/>}
  </>
  );
}

export default App;