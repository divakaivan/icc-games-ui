import React from "react";
import Champion from "./Champion";

const ChampionList = props => {
    return (
        <div>
            {props.champions.map(champ =>
                <Champion
                    champion={champ.name}
                />
            )}
        </div>
    )
};

export default ChampionList;