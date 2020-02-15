import React, {useEffect, useState} from "react";
import LoadingSpinner from "../shared/LoadingSpinner";
import Cards from "../cards/Cards";
import {useHttpClient} from "../hooks/http-hook";


const AllGames = () => {
    const [gameList, setGameList] = useState();
    const {isLoading, error, sendRequest} = useHttpClient();
    useEffect(()=>{
        const fetchGames = async () => {
            try {
                const responseData = await sendRequest('http://localhost:5000/api/games/');

                setGameList(responseData.games);
            } catch (err) {
                alert(error);
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