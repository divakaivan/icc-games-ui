import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import Cards from "../cards/Cards";
import LoadingSpinner from "../shared/LoadingSpinner";
import {useHttpClient} from "../hooks/http-hook";

const TeamGames = props => {
    const teamId = useParams().teamId;
    const [gameList, setGameList] = useState();
    const {isLoading, error, sendRequest} = useHttpClient();

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const responseData = await sendRequest(`http://localhost:5000/api/games/${teamId}/all`);

                setGameList(responseData.games);
            } catch (err) {
                alert(error);
            }
        };
        fetchGames();
    }, [error, sendRequest, teamId]);

    const loadedGames = gameList && gameList.filter(game => game.red === teamId || game.blue === teamId);
    return (
        <React.Fragment>
            {isLoading && (
                <div className="text-center mt-5">
                    <LoadingSpinner/>
                </div>
            )}
            {!isLoading && loadedGames && <Cards games={loadedGames}/>}
        </React.Fragment>
    )
};

export default TeamGames;