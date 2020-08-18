import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import pokedex from './pages/pokedex';
import battle from './pages/battle';
import search from './pages/search';
import signin from './pages/signin';

import NavBar from './components/NavBar/NavBar';
import './App.css';

const App = () => {
    return (
        <div className="body">
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/search/:id/pokedex" component={pokedex} />
                    <Route exact path="/search" component={search} />
                    <Route exact path="/battle" component={battle} />
                    <Route exact path="/signin" component={signin} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
