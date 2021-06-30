import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export const NavBar = props => {

    return (
        <div className="sidenav">
            <Link className="navbar-home link listed" to="/home">Home</Link>
        </div>

    )

}