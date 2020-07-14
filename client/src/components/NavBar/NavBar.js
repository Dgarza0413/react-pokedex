import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to="/search">
                <li>search</li>
            </Link>
            <Link to="/pokedex">
                <li>Pokedex</li>
            </Link>
            <Link to='/battle'>
                <li>Battle</li>
            </Link>
            <Link to='/signin'>
                <li>signin</li>
            </Link>
            <Link to='/signup'>
                <li>signup</li>
            </Link>
        </nav>
    )
}

export default NavBar