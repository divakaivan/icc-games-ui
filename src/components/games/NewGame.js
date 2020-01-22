import React, {useState} from "react";
import "../../stylesheets/NewGame.css";
import ChampionPicked from "./ChampionPicked";

const NewGame = () => {
    const [champion, setChampion] = useState("");
    const [championsList, setChampionsList] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        setChampionsList([...championsList, champion]);
    };

    return (
        <div className="text-white mt-5 container">
            <div className="row center-block align-items-center text-center">
                <div className="col-md-2">
                    {championsList[0] ? <ChampionPicked champion={championsList[0]}/> : (<h3>Top lane<br/></h3>)}
                    {championsList[1] ? <ChampionPicked champion={championsList[1]}/> : (<h3>Jungle<br/></h3>)}
                    {championsList[2] ? <ChampionPicked champion={championsList[2]}/> : (<h3>Mid lane<br/></h3>)}
                    {championsList[3] ? <ChampionPicked champion={championsList[3]}/> : (<h3>Bot lane<br/></h3>)}
                    {championsList[4] ? <ChampionPicked champion={championsList[4]}/> : (<h3>Support<br/></h3>)}
                </div>
                <div className="col-md-8">
                    <input type="text" value={champion} onChange={e=>setChampion(e.target.value)}/>
                    <input type="submit" onClick={handleSubmit}/>
                </div>
                <div className="col-md-2">
                    {championsList[5] ? <ChampionPicked champion={championsList[5]}/> : (<h3>Top lane<br/></h3>)}
                    {championsList[6] ? <ChampionPicked champion={championsList[6]}/> : (<h3>Jungle<br/></h3>)}
                    {championsList[7] ? <ChampionPicked champion={championsList[7]}/> : (<h3>Mid lane<br/></h3>)}
                    {championsList[8] ? <ChampionPicked champion={championsList[8]}/> : (<h3>Bot lane<br/></h3>)}
                    {championsList[9] ? <ChampionPicked champion={championsList[9]}/> : (<h3>Support<br/></h3>)}
                </div>
            </div>
        </div>
    );
};

export default NewGame;