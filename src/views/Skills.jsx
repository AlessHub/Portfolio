import React from "react";
import "../views/Skills.css";
import Cards from "../components/Skillcards/Skillcards.jsx"

function Skills() {
  return (
    <div>
      <h1 className="skills-title" id="skills-title">What can I do?</h1>
      <Cards />
    </div>
  );
}

export default Skills;
