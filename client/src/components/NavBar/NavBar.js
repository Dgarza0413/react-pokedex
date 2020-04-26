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
        </nav>
    )
}

export default NavBar