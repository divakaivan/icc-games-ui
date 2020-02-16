import React from "react";
import "./card-style.css";
import PropTypes from "prop-types";

/**
 * This component creates a card for a game with a header picture,
 * opponents (blue vs red) in the body, a hyperlink to the youtube video of the game
 * and a View Game button to view the full info about the game.
 */
const Card = props => {
    return (
        <div className="mx-auto mb-5 card w-75 text-center shadow">
            <div className="overflow">
                <img src="https://raw.githubusercontent.com/divakaivan/icc-games-ui/9c54ec768829bfd2f65949d2ae023e990731ac12/src/components/cards/this-is-lec.jpg" className="card-img-top" alt="random"/>
            </div>
            <div className="card-body text-darker">
                <h4 className="font-weight-bold card-title">
                    {`${props.red} vs ${props.blue}`}
                </h4>
                <p className="card-text text-secondary">
                    <a href={props.videoLink} target="blank">See on YouTube</a>
                </p>
                <a href={`/${props.id}`} className="btn btn-outline-success">View game</a>
            </div>
        </div>
    )
};

export default Card;

Card.propTypes = {
    /**
     * The red side team name.
     */
    red: PropTypes.string.isRequired,
    /**
     * The blue side team name.
     */
    blue: PropTypes.string.isRequired,
    /**
     * A youtube link to the video of the game.
     */
    videoLink: PropTypes.string.isRequired,
    /**
     * Unique id for each game item. Comes from MongoDb's IDs.
     */
    id: PropTypes.string.isRequired
};