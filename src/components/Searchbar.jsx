import React from "react";
import "../resources/styles/Searchbar.css"
import Button from "./Button.jsx"

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this) //Necesario para que funcione el callback
        this.state = {searchValue: ""}
      }

    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    handleClick() {
      console.log("Clickeado el botón")
    }

    render() {
        return (
            <div className="container" id="searchbar">
             <div className="row text-center" id="searchbar-row">
                  <div className="col-12">
                      <input 
                      onChange={this.handleChange} 
                      value={this.state.searchValue}
                      className="form-control" 
                      type="text" 
                      placeholder="Producto" 
                      name="searchValue" 
                      id="searchbar-placeholder"
                      />
                  </div>
                  <Button searchValue={this.state.searchValue} onClick={this.handleClick} />
                  <div className="col-12">
                    <p className="text-muted" id="copyright">© 2020 Ubico Medellin, Colombia</p>
                  </div>
              </div>
            </div>
        )
    }
}

export default SearchBar;