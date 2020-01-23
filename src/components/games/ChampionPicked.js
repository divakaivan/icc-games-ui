import React from "react";
import validChampions from "./CheckChampionValid";

const ChampionPicked = props => {
    return (
        <div>
            <img style={{width: "50px"}} className="avatar" alt="champion"
                 src={`http://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/${props.champion}.png`}/>
        </div>
    )
};

export default ChampionPicked;