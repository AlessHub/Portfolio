import React from "react";
import Navbar from "../components/Navbar.jsx";
import Firstsection from "../components/Firstsection/Firstsection.jsx";
import '../views/Home.css';
import Secondsection from "../components/Secondsection/Secondsection.jsx";

function Home(){
    return(
    <div>
        <Navbar />
        <div className="home-container">
            <Firstsection />
            <Secondsection />
        </div>
    </div>
    )
}

export default Home;