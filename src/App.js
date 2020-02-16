import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import NavBar from "./components/shared/NavBar";
import NewGame from "./components/games/NewGame";
import TeamGames from "./components/games/TeamGames";
import ViewGame from "./components/games/ViewGame";
import AllGames from "./components/games/AllGames";

const App = () => {


    return (
            <Router>
                <NavBar/>
                <main>
                    <Switch>
                        <Route path="/" exact>
                            <AllGames/>
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
