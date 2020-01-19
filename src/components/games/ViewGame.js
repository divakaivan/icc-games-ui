import React from "react";
import {useParams} from "react-router";
import Card from "../cards/CardUi";
import "./ViewGame.css";
import Cards from "../cards/Cards";
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

const ViewGame = props => {
    const gameId = useParams().gameId;
    const game = [gamesList.find(game => game.id === gameId)];
    return <Cards games={game}/>
};

export default ViewGame