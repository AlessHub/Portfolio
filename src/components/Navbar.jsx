import React from "react";
import logowhite from '../assets/logowhite.png';
import '../components/Navbar.css';

function Navbar(){
    return(
        <nav className="navbar" id="navbar">
            <ul className="navbar-btns" id="navbar-btns">
                <a href="#"><img className="logo" id="logo" src={logowhite} alt="Logo" /></a>
                <div className="navbar-left" id="navbar-left">
                    <li><a className="navbar-btn" id="navbar-btn" href="#">Home</a></li>
                    <li><a className="navbar-btn" id="navbar-btn" href="#">Portfolio</a></li>
                    <li><a className="navbar-btn" id="navbar-btn" href="#">Contact</a></li>
                </div>
            </ul>
        </nav>
    
    )
}

export default Navbar;