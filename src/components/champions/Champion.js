import React from "react";
import PropTypes from "prop-types";

/**
 * This component displays a champion picture and the champion name. Depending on which side (prop) is given,
 * it can either be IMAGE NAME(right side) or NAME IMAGE(left side)
 */
const Champion = props => {
    return (
        <React.Fragment>
            {props.side === "left" ?
                (
                    <div style={{fontWeight: "bold", color: "whitesmoke", marginTop: "5px"}}>
                        <img style={{width: "50px"}} className="avatar" alt="champion"
                             src={`http://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/${props.champion}.png`}/> {props.champion}
                    </div>
                ) :
                (
                    <div style={{fontWeight: "bold", color: "whitesmoke", marginTop: "5px"}}>
                        {props.champion}<img style={{width: "50px"}} className="avatar" alt="champion"
                             src={`http://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/${props.champion}.png`}/>
                    </div>
                )
            }
        </React.Fragment>
    )
};

export default Champion;

Champion.propTypes = {
    /**
     * An indicator of how to put the picture of a champ and its name (left/right).
     * Based on the side of the team for which the champion is being picked.
     */
    side: PropTypes.string.isRequired,
    /**
     * The champion name passed dynamically to an URL that will bring up the champion's picture.
     */
    champion: PropTypes.string.isRequired
};