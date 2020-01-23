import React, {useState} from "react";
import "../../stylesheets/NewGame.css";
import validChampions from "./CheckChampionValid";
import ChampionPicked from "./ChampionPicked";

const NewGame = () => {
    const [champion, setChampion] = useState("");
    const [championsList, setChampionsList] = useState([]);
    const [invalidChampion, setInvalidChampion] = useState(false);
    const [role, setRole] = useState("");
    const [side, setSide] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (validChampions.includes(champion)) {
            setChampionsList([...championsList, champion]);
        } else {
            setInvalidChampion(true);
        }
    };
    console.log(role);
    return (
        <div className="text-white mt-5 container">
            <div className="row center-block align-items-center text-center">
                <div className="col-md-2">
                    {championsList[0] ? <ChampionPicked champion={championsList[0]}/> : (<h3>Top lane<br/></h3>)}
                    {championsList[1] && role === "Jungle" && side === "Blue" ? <ChampionPicked champion={championsList[1]}/> : (<h3>Jungle<br/></h3>)}
                    {championsList[2] && role === "Mid" && side === "Blue" ? <ChampionPicked champion={championsList[2]}/> : (<h3>Mid lane<br/></h3>)}
                    {championsList[3] && role === "Bot" && side === "Blue" ? <ChampionPicked champion={championsList[3]}/> : (<h3>Bot lane<br/></h3>)}
                    {championsList[4] && role === "Support" && side === "Blue" ? <ChampionPicked champion={championsList[4]}/> : (<h3>Support<br/></h3>)}
                </div>
                <div className="col-md-8">
                    {invalidChampion ? (<div><h4 style={{color: "red"}}>Invalid Champion</h4><button onClick={()=>setInvalidChampion(false)}>OK</button></div>) : null}
                    <div className="row">
                        <div className="col-md-2">
                            <form>
                                <input type="radio" name="champ" value="Top" onClick={()=>setRole("Top")}/>Top<br/>
                                <input type="radio" name="champ" value="Jungle" onClick={()=>setRole("Jungle")}/>Jungle<br/>
                                <input type="radio" name="champ" value="Jungle" onClick={()=>setRole("Mid")}/>Mid<br/>
                                <input type="radio" name="champ" value="Jungle" onClick={()=>setRole("Bot")}/>Bot<br/>
                                <input type="radio" name="champ" value="Jungle" onClick={()=>setRole("Support")}/>Support<br/>
                            </form>
                        </div>
                        <div className="col-md-2">
                            <form>
                                <input type="radio" name="champ" value="Top" onClick={()=>setSide("Blue")}/>Blue<br/>
                                <input type="radio" name="champ" value="Jungle" onClick={()=>setRole("Red")}/>Red<br/>
                            </form>
                        </div>
                    </div>
                    <input type="text" value={champion} onChange={e=>setChampion(e.target.value)}/>
                    <input type="submit" onClick={handleSubmit}/>
                </div>
                <div className="col-md-2">
                    {championsList[5] && role === "Top" && side === "Red" ? <ChampionPicked champion={championsList[5]}/> : (<h3>Top lane<br/></h3>)}
                    {championsList[6] && role === "Jungle" && side === "Red" ? <ChampionPicked champion={championsList[6]}/> : (<h3>Jungle<br/></h3>)}
                    {championsList[7] && role === "Mid" && side === "Red" ? <ChampionPicked champion={championsList[7]}/> : (<h3>Mid lane<br/></h3>)}
                    {championsList[8] && role === "Bot" && side === "Red" ? <ChampionPicked champion={championsList[8]}/> : (<h3>Bot lane<br/></h3>)}
                    {championsList[9] && role === "Support" && side === "Red" ? <ChampionPicked champion={championsList[9]}/> : (<h3>Support<br/></h3>)}
                </div>
            </div>
        </div>
    );
};

export default NewGame;