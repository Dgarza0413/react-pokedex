import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import pokedex from './pages/pokedex';
import battle from './pages/battle';
import search from './pages/search';

import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {

    return (
        <div className="body">
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/pokedex" component={pokedex} />
                    <Route exact path="/search" component={search} />
                    <Route exact path="/battle" component={battle} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
