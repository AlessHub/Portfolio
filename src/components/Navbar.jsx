import React from "react";
import logowhite from '../assets/logowhite.png';
import '../components/Navbar.css';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



function Navbar(){
   return (
        <nav className="navbar" id="navbar">
          <ul className="navbar-btns" id="navbar-btns">
            <li>
              <img className="logo" id="logo" src={logowhite} alt="Logo" />
            </li>
            <div className="navbar-left" id="navbar-left">
              <li className="navbar-btn" id="navbar-btn" >
                <Link smooth spy to="Home">
                  Home
                </Link>
              </li>
              <li className="navbar-btn" id="navbar-btn">
                <Link smooth spy to="Portfolio">
                  Portfolio
                </Link>
                
              </li>
              <li className="navbar-btn" id="navbar-btn">
                <Link smooth spy to="footer">
                  Contact
                </Link>
              </li>
            </div>
          </ul>
        </nav>
    );
}

export default Navbar;