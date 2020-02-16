import React from "react";
import Champion from "./Champion";

const ChampionList = props => {
    return (
        <div>
            {props.side === "left" ? props.champions.map(champ =>
                <Champion
                    side="left"
                    champion={champ}
                />
            ) : props.champions.map(champ =>
                <Champion
                    side="right"
                    champion={champ}
                />
            )
            }
        </div>
    )
};

export default ChampionList;