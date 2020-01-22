import React from "react";
import Champion from "./Champion";

const ChampionList = props => {
    return (
        <div>
            {props.side === "left" ? props.champions.map(champ =>
                <Champion
                    side="left"
                    champion={champ.name}
                />
            ) : props.champions.map(champ =>
                <Champion
                    side="right"
                    champion={champ.name}
                />
            )
            }
        </div>
    )
};

export default ChampionList;