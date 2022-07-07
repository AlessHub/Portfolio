import React from "react";
import Portfoliocards from "../components/Portfoliocards/Portfoliocards";
import '../views/Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio-container" id="Portfolio">
            <h1 className="portfolio-title">Portfolio</h1>
            <p className="portfolio-text">You can see some of my projects right below</p>
            <Portfoliocards />
        </section>
    )
}

export default Portfolio;