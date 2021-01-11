import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import pokedex from './pages/pokedex';
import account from './pages/account';
import battle from './pages/battle';
import search from './pages/search';
import login from './pages/login';
import signup from './pages/signup';

import NavBar from './components/NavBar/NavBar';
import './App.css';

const App = () => {

    // const PrivateRoute = ({ component: Component, auth, ...rest }) => {
    // console.log(auth)
    // return (
    //   <Route
    //     {...rest}
    //     render={(props) => auth
    //       ? <Component {...props} />
    //       : <Redirect to={{
    //         pathname: '/login',
    //         state: { from: props.location }
    //       }} />
    //     }
    //   />
    // )
    // }

    // if (isLoading) {
    //     return <div>Loading ...</div>;
    // }

    // useEffect(() => {

    // }, [])

    return (
        <div className="body">
            <Router>
                <NavBar />
                <Switch>
                    {/* <PrivateRoute exact path="/account/:id" auth={isAuth} component={ } /> */}
                    <Route exact path="/search/:id/pokedex" component={pokedex} />
                    <Route exact path="/account" component={account} />
                    <Route exact path="/search" component={search} />
                    <Route exact path="/battle" component={battle} />
                    <Route exact path="/signup" component={signup} />
                    <Route exact path="/login" component={login} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
