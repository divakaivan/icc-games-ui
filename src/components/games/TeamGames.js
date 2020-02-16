import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import Cards from "../cards/Cards";
import LoadingSpinner from "../shared/LoadingSpinner";
import {useHttpClient} from "../hooks/http-hook";

/**
 * This component shows the games for a specific team. At the moment I have only two teams (for development) G2 and FNC.
 * The component fetches all games from the database and then this list of games is filtered for games where the team
 * has played.
 *
 * There might be an improvement. Because if we have a lot of games, fetching all games every time and then filtering it
 * could be costly.
 */
const TeamGames = () => {
    const teamId = useParams().teamId;
    const [gameList, setGameList] = useState();
    const {isLoading, error, sendRequest} = useHttpClient();

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const responseData = await sendRequest(`http://localhost:5000/api/games/${teamId}/all`);

                setGameList(responseData.games);
            } catch (err) {
                alert(err);
            }
        };
        fetchGames();
    }, []);

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