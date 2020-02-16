import React from "react";
import Card from "./Card";
import "./card-style.css";
import PropTypes from "prop-types";

/**
 * This component maps a Card component for each game that is in the database.
 */
const Cards = props => {
    return (
        <div className="container-fluid">
            <div className="row card-deck">
                {
                    props.games.map(game => {
                        return (
                            <div className="col-md-4">
                                <Card
                                    id={game.id}
                                    red={game.red}
                                    blue={game.blue}
                                    videoLink={game.videoLink}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Cards;

Cards.propTypes = {
    /**
     * A list of objects. Each object is a game that has an id, red, blue and videoLink element.
     */
    games: PropTypes.array.isRequired
};