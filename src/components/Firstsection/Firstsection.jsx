import React from "react";
import '../Firstsection/Firstsection.css';

function Firstsection(){
    return(
        <section className="section1">
           <h1 className="name">Alessandro<br/>Arroyo<br/>Lebron</h1>
           <h2 className="title">Web developer</h2>
           <button className="button"><p className="button-text">Contact Me</p></button>
           <div className="section1-icons">
                <i class="fa-solid fa-envelope" alt="Email icon"></i>
                <i class="fa-brands fa-linkedin" alt="Linkedin icon"></i>
                <i class="fa-brands fa-twitter" alt="Twitter icon"></i>
            </div>
        </section>
        )
    }

export default Firstsection;