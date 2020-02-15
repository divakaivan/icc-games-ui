import React, {useState, useEffect} from "react";
import {useParams} from "react-router";
import "../../stylesheets/ViewGame.css";
import YouTube from "react-youtube-embed";
import ChampionList from "./ChampionList";


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

    const [showModal, setShowModal] = useState(false);
    const [game, setGame] = useState();

    useEffect(() => {
        const sendRequest = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/games/${gameId}`);

                const responseData = await response.json();

                if (!response.ok) {
                    throw new Error(responseData.message);
                }

                setGame(responseData.game);
            } catch (err) {
                console.log("Error: "+err.message);
            }
        };
        sendRequest();
    }, []);
    const videoId = game && game.videoLink.split("watch?v=")[1];
    const blueChamps = game && game.champions.slice(0, 5);
    const redChamps = game && game["champions"].slice(5, 10);

    return (
        <React.Fragment>
            {game && <div className="jumbotron view-game fluid align-content-center">
                <div className="overlay">
                    <div className="container text-center mt-5">
                        <h1 className="blue">{game.blue}</h1> vs <h1 className="red">{game.red}</h1>
                    </div>
                </div>
            </div>}
            {blueChamps && redChamps && <div className="text-white container">
                <div className="row">
                    <div className="my-auto align-middle col-md-1">
                        <p className="font-weight-bold text-primary ml-5" style={{
                            writingMode: "vertical-rl",
                            textOrientation: "upright"
                        }}>BLUE SIDE</p>
                    </div>
                    <div className="col-md-2 my-auto blue-side">
                        <ChampionList side="left" champions={blueChamps}/>
                    </div>
                    <div className="col-md-6">
                        <YouTube className="video" id={videoId}/>
                    </div>
                    <div className="col-md-2 my-auto text-right">
                        <ChampionList side="right" champions={redChamps}/>
                    </div>
                    <div className="text-right col-md-1 my-auto">
                        <p className="font-weight-bold text-danger" style={{
                            writingMode: "vertical-rl",
                            textOrientation: "upright"
                        }}>RED SIDE</p>
                    </div>
                </div>
                {/*<div className="row">*/}
                {/*    <div className="col-md-6 ml-5 mt-5">*/}
                {/*        <Button onClick={()=>setShowModal(true)} variant="primary">Update game info</Button>*/}
                {/*        <Modal animation={true} show={showModal}>*/}
                {/*            <Modal.Header closeButton>*/}
                {/*                <Modal.Title>Edit champion info</Modal.Title>*/}
                {/*            </Modal.Header>*/}
                {/*            <Modal.Body>*/}
                {/*                Blue side:<br/>*/}
                {/*                Top:<br/>*/}
                {/*                <input type="text" value={champs[0]["name"]}/><br/>*/}
                {/*                Jungle:<br/>*/}
                {/*                <input type="text" value={champs[1]["name"]}/><br/>*/}
                {/*                Mid:<br/>*/}
                {/*                <input type="text" value={champs[2]["name"]}/><br/>*/}
                {/*                Bot:<br/>*/}
                {/*                <input type="text" value={champs[3]["name"]}/><br/>*/}
                {/*                Support:<br/>*/}
                {/*                <input type="text" value={champs[4]["name"]}/><br/>*/}
                {/*                <br/>*/}
                {/*                Red side:<br/>*/}
                {/*                Top:<br/>*/}
                {/*                <input type="text" value={champs[0]["name"]}/><br/>*/}
                {/*                Jungle:<br/>*/}
                {/*                <input type="text" value={champs[1]["name"]}/><br/>*/}
                {/*                Mid:<br/>*/}
                {/*                <input type="text" value={champs[2]["name"]}/><br/>*/}
                {/*                Bot:<br/>*/}
                {/*                <input type="text" value={champs[3]["name"]}/><br/>*/}
                {/*                Support:<br/>*/}
                {/*                <input type="text" value={champs[4]["name"]}/><br/>*/}
                {/*            </Modal.Body>*/}
                {/*            <Modal.Footer>*/}
                {/*                <Button variant="primary" onClick={(e) => console.log(e)}>Submit</Button>*/}
                {/*                <Button variant="secondary" onClick={() => setShowModal(false)}>*/}
                {/*                    Close*/}
                {/*                </Button>*/}
                {/*            </Modal.Footer>*/}
                {/*        </Modal>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>}
        </React.Fragment>
    )
};

export default ViewGame;