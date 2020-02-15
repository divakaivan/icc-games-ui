import React, {useState} from "react";
import "../../stylesheets/NewGame.css";
import validChampions from "./CheckChampionValid";
import ChampionPicked from "./ChampionPicked";
import {Modal, Button} from "react-bootstrap";

const NewGame = () => {
    const [champion, setChampion] = useState("");
    const [championsList, setChampionsList] = useState([]);
    const [invalidChampion, setInvalidChampion] = useState(false);
    const [urlLink, setUrlLink] = useState("");
    const [ableToSubmit, setAbleToSubmit] = useState(false);
    const [blueTeam, setBlueTeam] = useState('');
    const [redTeam, setRedTeam] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (validChampions.includes(champion)) {
            setChampionsList([...championsList, champion]);
        } else {
            setInvalidChampion(true);
        }
    };

    const addGameChecker = e => {
        e.preventDefault();
        if (urlLink && redTeam && blueTeam && championsList.length === 10) {
            setAbleToSubmit(true);
            fetch('http://localhost:5000/api/games/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    red: redTeam,
                    blue: blueTeam,
                    champions: championsList,
                    videoLink: urlLink
                })
            }).then(
                alert('Game added successfully!')
            )
        }
    };

    return (
        <div className="text-white mt-5 container">
            <div className="row center-block align-items-center text-center">
                <div className="col-md-2">
                    {championsList[0] ? <ChampionPicked champion={championsList[0]}/> : (<h3>Top lane<br/></h3>)}
                    {championsList[1] ? <ChampionPicked champion={championsList[1]}/> : (<h3>Jungle<br/></h3>)}
                    {championsList[2] ? <ChampionPicked champion={championsList[2]}/> : (<h3>Mid lane<br/></h3>)}
                    {championsList[3] ? <ChampionPicked champion={championsList[3]}/> : (<h3>Bot lane<br/></h3>)}
                    {championsList[4] ? <ChampionPicked champion={championsList[4]}/> : (<h3>Support<br/></h3>)}
                </div>
                <div className="col-md-8">
                    {invalidChampion ?
                        (
                            <Modal animation={true} show={invalidChampion}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>You entered an invalid champion: <strong>{champion}</strong></Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setInvalidChampion(false)}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        )
                        : null}
                    <h5>Input champions (left side from top to bottom then right side)</h5>
                    <input type="text" className="input-champ" value={champion} onChange={e=>setChampion(e.target.value)}/>
                    <br/>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>Add champion</Button>
                    <br/><br/>
                    <h5>YouTube link to the game</h5>
                    <input type="text" className="input-champ" value={urlLink} onChange={e=>setUrlLink(e.target.value)}/>
                    <br/>
                    <h5>Blue side team</h5>
                    <input type="text" className='input-champ' value={blueTeam} onChange={e=>setBlueTeam(e.target.value)}/>
                    <br/>
                    <h5>Red side team</h5>
                    <input type="text" className='input-champ' value={redTeam} onChange={e=>setRedTeam(e.target.value)}/>
                    <br/>
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