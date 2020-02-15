import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import NavBar from "./components/shared/NavBar";
import NewGame from "./components/games/NewGame";
import Cards from "./components/cards/Cards";
import TeamGames from "./components/games/TeamGames";
import ViewGame from "./components/games/ViewGame";
import LoadingSpinner from "./components/shared/LoadingSpinner";
import {useHttpClient} from "./components/hooks/http-hook";

const App = () => {
    const [gameList, setGameList] = useState();
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
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
            <Router>
                <NavBar/>
                <main>
                    <Switch>
                        <Route path="/" exact>
                            {isLoading && (
                                <div className="text-center mt-5">
                                    <LoadingSpinner/>
                                </div>
                            )}
                            {!isLoading && gameList && <Cards games={gameList}/>}
                        </Route>
                        <Route path="/new" exact>
                            <NewGame/>
                        </Route>
                        <Route path="/:teamId/all" exact>
                            <TeamGames/>
                        </Route>
                        <Route path="/:gameId" exact>
                            <ViewGame/>
                        </Route>
                        <Redirect to="/"/>
                    </Switch>
                </main>
            </Router>
    );
};

export default App;
