import React from "react";
import '../Skillcards/Skillcards.css';

function Cards() {
  return (
    <div>
      <div className="card-container" id="card-container">
        <div className="card" id="card">
          <i id="card-icons" className="fa-brands fa-html5"></i>
          <h2 className="card-title">HTML</h2>
          <p className="card-text" id="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
            imperdiet enim quis maecenas non faucibus eget. Eget ac nulla vitae
            ut eu scelerisque erat metus.
          </p>
        </div>
        <div className="card" id="card">
          <i id="card-icons" className="fa-brands fa-css3-alt"></i>
          <h2 className="card-title">CSS</h2>
          <p className="card-text" id="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
            imperdiet enim quis maecenas non faucibus eget. Eget ac nulla vitae
            ut eu scelerisque erat metus.
          </p>
        </div>
        <div className="card" id="card">
          <i id="card-icons" className="fa-brands fa-js-square"></i>
          <h2 className="card-title">JavaScript</h2>
          <p className="card-text" id="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
            imperdiet enim quis maecenas non faucibus eget. Eget ac nulla vitae
            ut eu scelerisque erat metus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;