import React, { useState } from "react";
import { connect } from "react-redux";
import { getSearch } from "../actions/searchActions"
import "../resources/styles/Searchbar.css"
import Button from "./Button.jsx";


const SearchBar = props =>  {
  const [finalSearchValue, setValue] = useState({
    initialSearch: ""})

  const handleChange = e => {
    setValue({
      [e.target.name]: e.target.value
    })
  }

   const handleClick = e => {
     props.getSearch(finalSearchValue)
   }
  
    return (
    <div className="container" id="searchbar">
      <div className="row text-center" id="searchbar-row">
          <div className="col-12">
              <input 
              onChange={handleChange} 
              className="form-control" 
              type="text" 
              placeholder="Producto" 
              name="searchValue" 
              id="searchbar-placeholder"
              />
          </div>
          <Button
          onClick={handleClick}
          buttonTitle="¡Buscar tu producto!"
          routeToRedirect="/results"
          />
          <div className="col-12">
            <p className="text-muted" id="copyright">© 2020 Ubico Medellin, Colombia</p>
          </div>
      </div>
    </div>
  )
}

 const mapDispatchToProps = {
   getSearch,
 } 


export default connect(null, mapDispatchToProps)(SearchBar); //Conectamos al store con (reducers, actions)