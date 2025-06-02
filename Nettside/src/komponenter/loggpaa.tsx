interface props
{
    brukernavn: string;
    passord: string;
    setBrukernavn: (verdi:string)=>void;
    setPassord: (verdi:string)=>void;
    Login:()=>void;
    lagerBruker:boolean;
    setLagerBruker:(verdi:boolean)=>void;
    LagBruker:()=>void;
}

const LoggPaaSkjema = ({brukernavn, passord, setBrukernavn, setPassord, Login, lagerBruker, setLagerBruker, LagBruker}:props) =>{
    return (
    <div className="LoggInn">
    <h1>{lagerBruker ? "Lag bruker" : "Logg på"}</h1>
    <form onSubmit={e=>{e.preventDefault(); (lagerBruker ? LagBruker : Login())}}>
    <input required value={brukernavn} placeholder="Brukernavn" onChange={e=>setBrukernavn(e.target.value)}/>
    <input required value={passord} placeholder="Passord" onChange={e=>setPassord(e.target.value)}/>
    <button type="submit">{lagerBruker ? "Lag bruker" : "Logg inn"}</button>
    <button onClick={()=>setLagerBruker((lagerBruker ? false : true))}>{lagerBruker ? "Har bruker?" : "Har ikke bruker?"}</button>
    </form>
    </div>
    )
}

export default LoggPaaSkjema;