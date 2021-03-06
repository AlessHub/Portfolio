import React from "react";
import '../Secondsection/Secondsection.css';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function Secondsection(){
    return (
      <section className="section2" id="section2">
        <h2 className="about-me">About me</h2>
        <p className="about-me-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in magna
          diam quis malesuada elementum imperdiet non. Elementum scelerisque
          neque.
        </p>
        <Link smooth spy offset={-300} to="skills"><button className="button"><p className="button-text">Learn more</p></button></Link>
      </section>
    );
    }

export default Secondsection;