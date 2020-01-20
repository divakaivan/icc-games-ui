import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import NavBar from "./components/shared/NavBar";
import NewGame from "./components/games/NewGame";
import GamesList from "./components/games/GamesLIst";
import Cards from "./components/cards/Cards";
import TeamGames from "./components/games/TeamGames";
import ViewGame from "./components/games/ViewGame";
// import 'bootstrap/dist/css/bootstrap.min.css';

const gamesList = [
    {
        id: 1,
        red: "FNC",
        blue: "G2",
        duration: 32,
        videoUrl: "https://www.youtube.com/watch?v=ZyO75QKzB-0"
    },
    {
        id: 2,
        red: "MSF",
        blue: "G2",
        duration: 24,
        videoUrl: "https://www.youtube.com/watch?v=ZyO75QKzB-0"
    },
    {
        id: 3,
        red: "RGE",
        blue: "VIT",
        duration: 36,
        videoUrl: "https://www.youtube.com/watch?v=ZyO75QKzB-0"
    }
];

const App = () => {

    return (
            <Router>
                <NavBar/>
                <main>
                    <Switch>
                        <Route path="/" exact>
                            <Cards games={gamesList}/>
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
