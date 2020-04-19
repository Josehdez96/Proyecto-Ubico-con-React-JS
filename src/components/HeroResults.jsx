import React from "react";
import ubicoLogo from "../resources/companyImages/UbicoLogoLight.png"
import Button from "./Button.jsx"
import "../resources/styles/HeroResults.css"

const HeroResults = () => (
  <main>
    <div className="container" id="heroResults">
      <div className="row" id="main-row-results">
        <div className="col">
          <img src={ubicoLogo} alt="Logo Ubico"/>
        </div>
      </div>
    </div>
    <div className="container" id="buttonHero">
      <div className="row" id="">
        <Button className="button-hero-results" buttonTitle="¡Volver atras!" />
      </div>
    </div>
  </main>
);

export default HeroResults;