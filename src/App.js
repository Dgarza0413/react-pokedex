import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import pokedex from './pages/pokedex';
import battle from './pages/battle';
import search from './pages/search';

import NavBar from './components/NavBar/NavBar';
import './App.css';

// const client = new ApolloClient({
//     uri: "https://localhost:8000"
// });

// const POKEMON = gql`
//   {
//     rates(currency: "USD") {
//       currency
//       rate
//     }
//   }
// `;

function App() {
    return (
        // <ApolloProvider client={client}>
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
        // </ApolloProvider>
    );
}

export default App;
