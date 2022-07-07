import React from "react";
import Navbar from "../components/Navbar.jsx";
import Firstsection from "../components/Firstsection/Firstsection.jsx";
import '../views/Home.css';
import Secondsection from "../components/Secondsection/Secondsection.jsx";

function Home(){
    return(
    <section id="Home">
        <Navbar />
        <div className="home-container" id="home-container">
            <Firstsection />
            <Secondsection />
        </div>
    </section>
    )
}

export default Home;