import {Button} from "react-bootstrap";
import React from "react";
import PropTypes from "prop-types";

/**
 * This component is displayed when a user checks the games for a team that has no games added.
 */
const NoGames = props => {
    return (
        <div className="container text-center mt-5">
            <h1 style={{color: "white"}}>Error 404</h1>
            <h1 style={{color: "white"}}>No games found for {props.teamId}</h1>
            <Button href="/new" size="lg">Add one?</Button>
        </div>
    )
};

export default NoGames;

NoGames.propTypes = {
    /**
     * The team at which the user is currently looking.
     */
    teamId: PropTypes.string.isRequired
};