import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import SideBar from "./components/SideBar";
import {Container, Row, Col} from "react-bootstrap";
import Games from "./components/Games";
import NewGame from "./components/NewGame";

const App = () => {

    return (
        <Router>
            <SideBar/>
            <main>
            <Switch>
                <Route path="/" exact>
                    <Games/>
                </Route>
                <Route path="/new" exact>
                    <NewGame/>
                </Route>
                <Redirect to="/"/>
            </Switch>
            </main>
        </Router>
    );
};

export default App;
