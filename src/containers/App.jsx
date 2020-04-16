import React from 'react';
import Hero from "../components/Hero.jsx";
import Searchbar from "../components/Searchbar.jsx"
import Footer from "../components/Footer.jsx"
import "../resources/styles/App.css"



const App = () => (
  <div className="App"> 
    <Hero />
    <Searchbar />
    <Footer />
  </div>
)

export default App;
