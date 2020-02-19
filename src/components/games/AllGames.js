import React, {useEffect, useState} from "react";
import LoadingSpinner from "../shared/LoadingSpinner";
import Cards from "../cards/Cards";
import {useHttpClient} from "../hooks/http-hook";

/**
 * This component represents the All Games page on the app.
 * It has a Card for each game and there are 3 per row.
 */
const AllGames = () => {
    const [gameList, setGameList] = useState();
    const {isLoading, error, sendRequest} = useHttpClient();
    useEffect(()=>{
        const fetchGames = async () => {
            try {
                const responseData = await sendRequest('https://esports-bar.herokuapp.com/api/games/');

                setGameList(responseData.games);
            } catch (err) {
                console.log(err);
            }
        };
        fetchGames();
    }, [sendRequest]);
    return (
        <React.Fragment>
            {isLoading && (
                <div className="text-center mt-5">
                    <LoadingSpinner/>
                </div>
            )}
            {!isLoading && gameList && <Cards games={gameList}/>}
        </React.Fragment>
    )
};

export default AllGames;