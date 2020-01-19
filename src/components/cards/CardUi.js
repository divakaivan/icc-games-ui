import React from "react";
import "./card-style.css";
import {useParams} from "react-router";

const gamesList = [
    {
        id: "1",
        red: "FNC",
        blue: "G2",
        duration: 32,
        videoUrl: "https://www.youtube.com/watch?v=ZyO75QKzB-0"
    },
    {
        id: "2",
        red: "MSF",
        blue: "G2",
        duration: 24,
        videoUrl: "https://www.youtube.com/watch?v=ZyO75QKzB-0"
    },
    {
        id: "3",
        red: "RGE",
        blue: "VIT",
        duration: 36,
        videoUrl: "https://www.youtube.com/watch?v=ZyO75QKzB-0"
    }
];

const Card = props => {
    const gameId = useParams().gameId;
    const game = gamesList.find(game => game.id === gameId);
    console.log(gameId);
    return (
        <div className="mx-auto mb-5 card w-75 text-center shadow">
            <div className="overflow">
                <img src="https://i.ebayimg.com/images/g/4l4AAOSwx3dbjPf1/s-l300.jpg" className="card-img-top" alt="random"/>
            </div>
            <div className="card-body text-darker">
                <h4 className="font-weight-bold card-title">
                    {`${props.red} vs ${props.blue}`}
                </h4>
                <p className="card-text text-secondary">
                    Duration: {props.duration}<br/>
                    <a href={props.videoUrl} target="blank">See on YouTube</a>
                </p>
                <a href={`/${props.id}`} className="btn btn-outline-success">View game</a>
            </div>
        </div>
    )
};

export default Card;