import { useState, useEffect } from 'react'
import Foresporsler from './komponenter/foresporsler';
import './style.css'

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

const App = () => {

  const [hundeEiere, setHundeEiere] = useState<HundeEier[]>([]);
  const [hundePassere, setHundePassere] = useState<HundePasser[]>([]);
  const [foresporsler, setForesporsler] = useState<Foresporsel[]>([]);
  
  const [loggetPaa, setLoggetPaa] = useState(false);
  const [burkernavn, setBrukernavn] = useState("");
  const [passord, setPassord] = useState("");
  const [aktivBruker, setAktivBruker] = useState<Bruker>();

  const login = () => {
    console.log("Login");
    setLoggetPaa(true);
  }

  return (
    <>
      {!loggetPaa ?   
      <form className="login" onSubmit={e=>{e.preventDefault(); login()}}>
        <input required placeholder="Brukernavn" value={burkernavn} onChange={e=>setBrukernavn(e.target.value)}/>
        <input required placeholder="Passord" value={passord} onChange={e=>setPassord(e.target.value)}/>
        <button type="submit">Logg inn</button>
      </form>
    : <div className="hovedSide">
        {aktivBruker && <Foresporsler aktivBruker={aktivBruker} foresporsler={foresporsler}/>}
      </div>}
    </>
  )
}

export default App
