import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../images/Logo.png';

import "./Header.css"

export const Header = (props) => {

    return (
        <nav className="row navbar-custom">
            <div className="d-flex justify-content-between w-75 m-auto">
                <div className="mt-3">
                    <Link to={"/"} className="navbar-brand text-brown"><img src={logo} className="navbar-logo" alt="logo"/></Link>
                    <Link to={"/books"} className="navbar-element"> Books </Link>
                    <Link to={"/authors"} className="navbar-element"> Authors </Link>
                    <Link to={"/reviews"} className="navbar-element"> Reviews</Link>
                </div>
                <div className="mt-3">
                    <Link to={"/login"} className="navbar-element"> Sign in</Link>
                    <Link to={"/signup"} className="navbar-element"> Sign up</Link>
                </div>
            </div>
        </nav>
    );
};
