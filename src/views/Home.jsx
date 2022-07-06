import React from "react";
import Navbar from "../components/Navbar.jsx";
import Firstsection from "../components/Firstsection/Firstsection.jsx";
import '../views/Home.css';
import pandapic from '../assets/pandapic.jpg';
import Secondsection from "../components/Secondsection/Secondsection.jsx";
import Skills from "./Skills";

function Home(){
    return(
    <div>
        <Navbar />
        <div className="home-container">
            <Firstsection />
            <Secondsection />
        </div>
        <div class="panda-container"><img className="panda" src={pandapic} alt="Panda" /></div>
        <Skills />
    </div>
    )
}

export default Home;