import React from "react";
import PropTypes from "prop-types";

/**
 * This component is used in the New Game page, where a champion's picture is shown after a valid champion has been selected.
 */
const ChampionPicked = props => {
    return (
        <div>
            <img style={{width: "50px"}} className="avatar" alt="champion"
                 src={`http://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/${props.champion}.png`}/>
        </div>
    )
};

export default ChampionPicked;

ChampionPicked.propTypes = {
    /**
     * The champion name passed dynamically to an URL that will bring up the champion's picture.
     */
    champion: PropTypes.string.isRequired
};