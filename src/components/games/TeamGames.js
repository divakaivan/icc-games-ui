import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import Cards from "../cards/Cards";

const TeamGames = props => {
    const teamId = useParams().teamId;
    const [gameList, setGameList] = useState();

    useEffect(() => {
        const sendRequest = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/games/${teamId}/all`);

                const responseData = await response.json();
                if (!response.ok) {
                    throw new Error(responseData.message);
                }

                setGameList(responseData.games);
            } catch (err) {
                console.log(err.message);
            }
        };
        sendRequest();
    }, []);

    const loadedGames = gameList && gameList.filter(game => game.red === teamId || game.blue === teamId);
    return (
        <React.Fragment>
            {loadedGames && <Cards games={loadedGames}/>}
        </React.Fragment>
    )
};

export default TeamGames;