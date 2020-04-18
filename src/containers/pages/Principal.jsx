import React from 'react';
import Hero from "../../components/Hero.jsx";
import Searchbar from "../../components/Searchbar.jsx"
import Footer from "../../components/Footer.jsx"
import "../../resources/styles/Principal.css"



class Principal extends React.Component {
  render () {
    return (
      <div className="Principal"> 
        <Hero />
        <Searchbar />
        <Footer />
      </div>
    )
  }
}


export default Principal;
