import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import cookie from 'js-cookie';

import useAuth from '../../hooks/useAuth';

import './styles.css';

const NavBar = () => {
    const [show, setShow] = useState(false)
    const [handleLogout] = useAuth();

    const checkUser = () => {
        const token = cookie.get('token')
        if (token === 'undefined') {
            return setShow(false)
        } else if (token) {
            return setShow(true)
        } else {
            console.log('set error and possiblity redirect')
        }
    }

    useEffect(() => {
        checkUser()
    }, [])

    return (
        <nav className="nav-flex">
            <h1>POKEworld</h1>
            <div className="nav-section-flex">
                {show
                    ? <>
                        <Link to="/search">
                            <li className="nav-item">search</li>
                        </Link>
                        <Link to="/pokedex">
                            <li className="nav-item">Pokedex</li>
                        </Link>
                        <Link to="/account">
                            <li className="nav-item">Account</li>
                        </Link>
                        <Link to='/battle'>
                            <li className="nav-item">Battle</li>
                        </Link>
                        <Link>
                            <li className="nav-item" onClick={() => handleLogout()}>Log Out</li>
                        </Link>
                    </>
                    : <>
                        <Link to='/login'>
                            <li className="nav-item">Login</li>
                        </Link>
                        <Link to='/signup'>
                            <li className="nav-item">signup</li>
                        </Link>
                    </>
                }
            </div>
        </nav>
    )
}

export default NavBar