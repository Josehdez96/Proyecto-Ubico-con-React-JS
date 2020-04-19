import React from 'react';

import HeroMain from "../../components/HeroMain.jsx"
import Searchbar from "../../components/Searchbar.jsx"
import "../../resources/styles/Principal.css"



class Principal extends React.Component {
  render () {
    return (
      <div className="Principal"> 
        <HeroMain />
        <Searchbar />
      </div>
    )
  }
}


export default Principal;
