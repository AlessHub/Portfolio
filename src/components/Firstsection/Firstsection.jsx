import React from "react";
import '../Firstsection/Firstsection.css';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function Firstsection(){
    return(
        <section className="section1">
           <h1 className="name">Alessandro<br/>Arroyo<br/>Lebron</h1>
           <h2 className="title">Web developer</h2>
           <Link smooth spy to="footer"><button className="button"><p className="button-text">Contact me</p></button></Link>
           <div className="section1-icons">
                <i className="fa-solid fa-envelope" alt="Email icon"></i>
                <i className="fa-brands fa-linkedin" alt="Linkedin icon"></i>
                <i className="fa-brands fa-twitter" alt="Twitter icon"></i>
            </div>
        </section>
        )
    }

export default Firstsection;