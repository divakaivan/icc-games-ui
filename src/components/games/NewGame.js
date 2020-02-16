import React, {useState} from "react";
import "../../stylesheets/NewGame.css";
import validChampions from "./CheckChampionValid";
import ChampionPicked from "./ChampionPicked";
import {Modal, Button, Form, Col} from "react-bootstrap";
import {useHttpClient} from "../hooks/http-hook";
import InvalidChampionModal from "./GameAddition/InvalidChampionModal";
import GameAddedModal from "./GameAddition/GameAddedModal";

const NewGame = () => {
    const [champion, setChampion] = useState("");
    const [championsList, setChampionsList] = useState([]);
    const [invalidChampion, setInvalidChampion] = useState(false);
    const [urlLink, setUrlLink] = useState("");
    const [ableToSubmit, setAbleToSubmit] = useState(false);
    const [blueTeam, setBlueTeam] = useState('');
    const [redTeam, setRedTeam] = useState('');
    const [addedGameModal, setAddedGameModal] = useState(false);
    const [fullChampList, setFullChampList] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (validChampions.includes(champion) && championsList.length !== 10) {
            setChampionsList([...championsList, champion]);
            setChampion('');
        } else if (championsList.length === 10) {
            setFullChampList(true);
        } else {
            setInvalidChampion(true);
        }
    };

    const {sendRequest, error, isLoading} = useHttpClient();

    const addGameChecker = e => {
        e.preventDefault();
        if (urlLink && redTeam && blueTeam && championsList.length === 10) {
            setAbleToSubmit(true);
            sendRequest('http://localhost:5000/api/games/', 'POST',
                JSON.stringify({
                    red: redTeam,
                    blue: blueTeam,
                    champions: championsList,
                    videoLink: urlLink
                }),
                {'Content-Type': 'application/json'}).then(setAddedGameModal(true))
        }
    };
//,
    return (
        <div className="text-white mt-5 container">
            <div className="row align-items-center text-center">
                <div className="col-md-2">
                    {championsList[0] ? <ChampionPicked champion={championsList[0]}/> : (<h3>Top lane<br/></h3>)}
                    {championsList[1] ? <ChampionPicked champion={championsList[1]}/> : (<h3>Jungle<br/></h3>)}
                    {championsList[2] ? <ChampionPicked champion={championsList[2]}/> : (<h3>Mid lane<br/></h3>)}
                    {championsList[3] ? <ChampionPicked champion={championsList[3]}/> : (<h3>Bot lane<br/></h3>)}
                    {championsList[4] ? <ChampionPicked champion={championsList[4]}/> : (<h3>Support<br/></h3>)}
                </div>
                <div className="col-md-8">
                    <InvalidChampionModal invalidChampion={invalidChampion} champion={champion} setInvalidChampion={setInvalidChampion}/>
                    <GameAddedModal addedGameModal={addedGameModal}/>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Input champions (left side from top to bottom, then right side)</Form.Label>
                                <Form.Control type="text" value={champion} onChange={e=>setChampion(e.target.value)}/>
                                <Button className="mt-2" variant='primary' type="submit" disabled={fullChampList} onClick={handleSubmit}>
                                    Add champion
                                </Button>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Blue side</Form.Label>
                                <Form.Control type='text' value={blueTeam} onChange={e=>setBlueTeam(e.target.value)}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Red side</Form.Label>
                                <Form.Control type='text' value={redTeam} onChange={e=>setRedTeam(e.target.value)}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Youtube link</Form.Label>
                                <Form.Control type='text' value={urlLink} onChange={e=>setUrlLink(e.target.value)}/>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                    <Button variant="primary" disabled={ableToSubmit} type="submit" onClick={addGameChecker}>Submit all information</Button>
                </div>
                <div className="col-md-2">
                    {championsList[5] ? <ChampionPicked champion={championsList[5]}/> : (<h3>Top lane<br/></h3>)}
                    {championsList[6] ? <ChampionPicked champion={championsList[6]}/> : (<h3>Jungle<br/></h3>)}
                    {championsList[7] ? <ChampionPicked champion={championsList[7]}/> : (<h3>Mid lane<br/></h3>)}
                    {championsList[8] ? <ChampionPicked champion={championsList[8]}/> : (<h3>Bot lane<br/></h3>)}
                    {championsList[9] ? <ChampionPicked champion={championsList[9]}/> : (<h3>Support<br/></h3>)}
                </div>
            </div>
        </div>
    );
};

export default NewGame;