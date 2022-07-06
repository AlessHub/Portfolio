import React from "react";
import Portfoliocards from "../components/Portfoliocards/Portfoliocards";
import '../views/Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio-container">
            <h1 className="portfolio-title">Portfolio</h1>
            <p className="portfolio-text">You can see some of my projects right below</p>
            <Portfoliocards />
        </div>
    )
}

export default Portfolio;