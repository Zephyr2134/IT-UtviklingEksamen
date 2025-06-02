import {useState} from 'react';
import LoggPaaSkjema from './komponenter/loggpaa';

interface Bruker
{
  id:number;
  brukernavn:string;
  passord:string;

}

const App = () =>{

  const [loggetPaa, setLoggetPaa] = useState(false);
  const [brukernavn, setBrukernavn] = useState("");
  const [passord, setPassord] = useState("");
  const [lagerBruker, setLagerBruker] = useState(false);

  const Login = () =>{
    setLoggetPaa(true);
  }

  const LagBruker = () =>{

  }

  return (
  <>
  {loggetPaa ? <h1>Hi</h1>:<LoggPaaSkjema brukernavn={brukernavn} passord={passord} setBrukernavn={setBrukernavn} setPassord={setPassord} Login={Login} lagerBruker={lagerBruker} setLagerBruker={setLagerBruker} LagBruker={LagBruker}/>}
  </>
  );
}

export default App;