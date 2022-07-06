import React from "react";
import logowhite from '../assets/logowhite.png';
import '../components/Navbar.css';

function Navbar(){
    return(
        <nav className="navbar">
            <ul className="navbar-btns">
                <a href="#"><img className="logo" src={logowhite} alt="Logo" /></a>
                <div className="navbar-left">
                    <li><a className="navbar-btn" href="#">Home</a></li>
                    <li><a className="navbar-btn" href="#">Portfolio</a></li>
                    <li><a className="navbar-btn" href="#">Contact</a></li>
                </div>
            </ul>
        </nav>
    
    )
}

export default Navbar;