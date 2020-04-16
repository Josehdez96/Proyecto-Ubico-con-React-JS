import React from "react";
import ubicoLogo from "../resources/companyImages/UbicoLogoLight.png"
import "../resources/styles/Hero.css"

const Hero = () => (
  <main>
    <div className="container" id="hero">
      <div className="row" id="main-row">
        <div className="col">
          <img src={ubicoLogo} alt="Logo Ubico"/>
        </div>
      </div>
    </div>
  </main>
);

export default Hero;
