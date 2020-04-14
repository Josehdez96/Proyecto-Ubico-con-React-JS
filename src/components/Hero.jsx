import React from "react";
import ubicoLogo from "../resources/companyImages/UbicoLogoLight.png"
import SearchBar from "./Searchbar";

const Hero = () => (
  <div className="container">
    <div className="row text-center">
      <div className="col">
        <img src={ubicoLogo} alt="Logo Ubico"/>
      </div>
    </div>
    <div className="row text-center">
        <div className="col">
            <SearchBar />
        </div>
    </div>
  </div>
);

export default Hero;
