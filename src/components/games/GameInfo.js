import ChampionList from "../champions/ChampionList";
import YouTube from "react-youtube-embed";
import React from "react";

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