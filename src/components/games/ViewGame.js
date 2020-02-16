import React, {useState, useEffect} from "react";
import {useParams} from "react-router";
import "../../stylesheets/ViewGame.css";
import {Button, Modal} from "react-bootstrap";
import LoadingSpinner from "../shared/LoadingSpinner";
import {useHttpClient} from "../hooks/http-hook";
import GameInfo from "./GameInfo";

const ViewGame = props => {
    const gameId = useParams().gameId;
    const {sendRequest, error, isLoading} = useHttpClient();

    const [game, setGame] = useState();
    const [deleteModal, setDeleteModal] = useState(false);

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const responseData = await sendRequest(`http://localhost:5000/api/games/${gameId}`);

                setGame(responseData.game);
            } catch (err) {
                alert(err);
            }
        };
        fetchGame();
    }, []);
    const videoId = game && game.videoLink.split("watch?v=")[1];
    const blueChamps = game && game.champions.slice(0, 5);
    const redChamps = game && game.champions.slice(5, 10);

    const handleDelete = async () => {
        try {
            await sendRequest(`http://localhost:5000/api/games/${gameId}`, 'DELETE');
        } catch (err) {
            alert(err);
        }
    };

    return (
        <React.Fragment>
            {isLoading && (
                <div className="text-center mt-5">
                    <LoadingSpinner/>
                </div>
            )}
            {!isLoading && game && blueChamps && redChamps &&
            <div>
                <div className="jumbotron view-game fluid align-content-center">
                    <div className="overlay">
                        <div className="container text-center mt-5">
                            <h1 className="blue">{game.blue}</h1> vs <h1 className="red">{game.red}</h1>
                        </div>
                    </div>
                </div>
                <div className="text-white container">
                    <GameInfo videoId={videoId} blueChamps={blueChamps} redChamps={redChamps}/>
                    <div className="row">
                        <div className="col-md-6 ml-5 mt-5">
                            <Modal animation={true} show={deleteModal}>
                                <Modal.Header>
                                    <Modal.Title>Are you sure?</Modal.Title>
                                </Modal.Header>
                                <Modal.Footer>
                                    <Button variant="primary" onClick={handleDelete} href='http://localhost:3000/'>
                                        Delete game
                                    </Button>
                                    <Button onClick={() => setDeleteModal(false)} variant="primary">
                                        Go back
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 ml-5 mt-5">
                            <Button onClick={() => setDeleteModal(true)} variant="primary ml-4">Delete game</Button>
                        </div>
                    </div>
                </div>
            </div>}
        </React.Fragment>
    )
};

export default ViewGame;