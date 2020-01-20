import React from "react";
import {useParams} from "react-router";
import "../../stylesheets/ViewGame.css";
import YouTube from "react-youtube-embed";
import ChampionList from "./ChampionList";

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

const champs = [
    {
        name: "Aphelios",
        img: "https://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/Aphelios.png"
    },
    {
        name: "Braum",
        img: "https://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/Aphelios.png"
    },
    {
        name: "Ziggs",
        img: "https://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/Aphelios.png"
    },
    {
        name: "Jax",
        img: "https://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/Aphelios.png"
    },
    {
        name: "JarvanIV",
        img: "https://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/Aphelios.png"
    }
];

const ViewGame = props => {
    const gameId = useParams().gameId;
    const game = gamesList.find(game => game.id === gameId);
    return (
        <React.Fragment>
            <div className="jumbotron fluid align-content-center">
                <div className="overlay">
                    <div className="container text-center mt-5">
                        <h1 className="blue">{game.blue}</h1> vs <h1 className="red">{game.red}</h1>
                    </div>
                </div>
            </div>
            <div className="text-white container">
                <div className="row">
                    <div className="col-md-1 mt-5">
                        <p style={{
                            writingMode: "vertical-rl",
                            textOrientation: "upright"
                        }}>BLUE SIDE</p>
                    </div>
                    <div className="col-md-2 blue-side">
                        <ChampionList champions={champs}/>
                    </div>
                    <div className="col-md-6">
                            <YouTube className="video" id="ZyO75QKzB-0"/>
                    </div>
                    <div className="col-md-2 text-right">
                        Red side:
                        <ChampionList champions={champs}/>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
};

export default ViewGame;