import React from 'react';
import '../Portfoliocards/Portfoliocards.css';
import firstwebsite from '../../assets/firstwebsite.png';
import githubprofile from '../../assets/githubprofile.png';
import bootstraptest from '../../assets/bootstraptest.png';
import instrumentos from '../../assets/instrumentos.png';
import movieapp from '../../assets/movieapp.png';
import covidtracker from '../../assets/covidtracker.png';


function Portfoliocards() {
    return(
        <div className="portfolio-card-container" id="portfolio-card-container">
                <a className="portfolio-card" id="portfolio-card" ><img className="card-pictures" src={firstwebsite}/></a>
                <a className="portfolio-card" id="portfolio-card" ><img className="card-pictures" src={githubprofile}/></a>
                <a className="portfolio-card" id="portfolio-card" ><img className="card-pictures" src={bootstraptest}/></a>
                <a className="portfolio-card" id="portfolio-card" ><img className="card-pictures" src={instrumentos}/></a>
                <a className="portfolio-card" id="portfolio-card" ><img className="card-pictures" src={movieapp}/></a>
                <a className="portfolio-card" id="portfolio-card" ><img className="card-pictures" src={covidtracker}/></a>
        </div>
    )
}

export default Portfoliocards;