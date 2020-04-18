import React from 'react';
import Hero from "../components/Hero.jsx";
import Searchbar from "../components/Searchbar.jsx"
import Footer from "../components/Footer.jsx"
import "../resources/styles/App.css"



class App extends React.Component {
  constructor(props) { //Primero. Ocurre el Constructor(), es el lugar para inicializar state
    super(props);
    console.log("1. Constructor()")
  }

  componentDidMount() { //Tercero. Ocurre justo despues del render()
    console.log("3. componentDidMount()")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("4. componentDidUpdate()")
    console.log({prevProps: prevProps, prevState: prevState})
  }

  render () { //Segundo. Ocurre el render()
    console.log("2. render()")
    return (      
      <div className="App"> 
        <Hero />
        <Searchbar />
        <Footer />
      </div>
    )
  }
}

//Añadi metodos para actualizar el DOM (sin exito)
//Añadí nuevo Componente botón reutilizable usando props
//Comenzamos el manejo del click

export default App;
