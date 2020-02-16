import ChampionList from "../champions/ChampionList";
import YouTube from "react-youtube-embed";
import React from "react";
import PropTypes from "prop-types";

/**
 * This component is used in the View Game info page. It shows:
 *      1) Blue side champions listed on the left side
 *      2) Red side champions listed on the right side
 *      3) Video URL to the game on youtube in the middle.
 */
const GameInfo = props => {
    return (
        <div className="row">
            <div className="my-auto align-middle col-md-1">
                <p className="font-weight-bold text-primary ml-5" style={{
                    writingMode: "vertical-rl",
                    textOrientation: "upright"
                }}>BLUE SIDE</p>
            </div>
            <div className="col-md-2 my-auto blue-side">
                <ChampionList side="left" champions={props.blueChamps}/>
            </div>
            <div className="col-md-6">
                <YouTube className="video" id={props.videoId}/>
            </div>
            <div className="col-md-2 my-auto text-right">
                <ChampionList side="right" champions={props.redChamps}/>
            </div>
            <div className="text-right col-md-1 my-auto">
                <p className="font-weight-bold text-danger" style={{
                    writingMode: "vertical-rl",
                    textOrientation: "upright"
                }}>RED SIDE</p>
            </div>
        </div>
    )
};

export default GameInfo;

GameInfo.propTypes = {
    /**
     * Blue side team champions.
     */
    blueChamps: PropTypes.array.isRequired,
    /**
     * Red side team champions.
     */
    redChamps: PropTypes.array.isRequired,
    /**
     * The id of the video url passed when the game has been added. The id should be extracted in the parent component.
     * The id is what is after watch?v= and is 11 characters long.
     */
    videoId: PropTypes.string.isRequired
};