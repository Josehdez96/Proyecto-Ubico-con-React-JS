import React from "react";
import ubicoLogo from "../resources/companyImages/UbicoLogoLight.png"
import "../resources/styles/HeroMain.css"

const HeroMain = () => (
  <main>
    <div className="container" id="hero">
      <div className="row" id="main-row">
        <div className="col">
          <img src={ubicoLogo} alt="Logo Ubico"/>
          <p className="text-muted" id="hero-message">¡Tu buscador de tecnología!</p>
        </div>
      </div>
    </div>
  </main>
);

export default HeroMain;
