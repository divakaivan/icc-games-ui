import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import NavBar from "./components/shared/NavBar";
import NewGame from "./components/games/NewGame";
import Cards from "./components/cards/Cards";
import TeamGames from "./components/games/TeamGames";
import ViewGame from "./components/games/ViewGame";

const App = () => {
    const [gameList, setGameList] = useState();

    useEffect(()=>{
        const sendRequest = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/games/');

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

    return (
            <Router>
                <NavBar/>
                <main>
                    <Switch>
                        <Route path="/" exact>
                            {gameList && <Cards games={gameList}/>}
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
