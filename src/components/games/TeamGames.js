import React from "react";
import { useParams } from 'react-router-dom';
import Cards from "../cards/Cards";

const gamesList = [
    {
        id: 1,
        red: "FNC",
        blue: "G2",
        duration: 32,
        videoUrl: "https://www.youtube.com/watch?v=ZyO75QKzB-0"
    },
    {
        id: 2,
        red: "MSF",
        blue: "G2",
        duration: 24,
        videoUrl: "https://www.youtube.com/watch?v=ZyO75QKzB-0"
    },
    {
        id: 3,
        red: "RGE",
        blue: "VIT",
        duration: 36,
        videoUrl: "https://www.youtube.com/watch?v=ZyO75QKzB-0"
    }
];

const TeamGames = props => {
    const teamId = useParams().teamId;
    console.log(teamId);
    const loadedGames = gamesList.filter(game => game.red === teamId || game.blue === teamId);
    return (
        <Cards games={loadedGames}/>
    )
};

export default TeamGames;