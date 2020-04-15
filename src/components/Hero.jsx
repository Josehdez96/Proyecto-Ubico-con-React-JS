import React from "react";
import ubicoLogo from "../resources/companyImages/UbicoLogoLight.png"
import "../resources/styles/Hero.css"

const Hero = () => (
  <div className="container" id="hero">
    <div className="row" id="main-row">
      <div className="col">
        <img src={ubicoLogo} alt="Logo Ubico"/>
      </div>
    </div>
  </div>
);

export default Hero;
