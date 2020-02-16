import React from "react";
import Champion from "./Champion";
import PropTypes from "prop-types";

/**
 * Renders a Champion component. Creates a list of 5 champions with pictures and names.
 * Component is used (for example) in the View Game page to show champions of red and blue side team.
 */
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

ChampionList.propTypes = {
    /**
     * An indicator of how to put the picture of a champ and its name (left/right).
     * Based on the side of the team for which the champion is being picked.
     */
    side: PropTypes.string.isRequired,
    /**
     * An array of champion names.
     */
    champions: PropTypes.array.isRequired
};