import React from "react";
import "../resources/styles/searchbar.css"

class SearchBar extends React.Component {
    render() {
        return (
            <div className="container" id="searchbar">
             <div className="row text-center" id="searchbar-row">
                  <div className="col-12">
                      <input className="form-control" type="text" placeholder="Producto" id="searchbar-placeholder" />
                  </div>
                  <div className="col-12">
                  <button type="button" className="btn btn-primary" id="button-searchbar">¡Buscar tu producto!</button>
                  </div>
                  <div className="col-12">
                    <p className="text-muted" id="copyright">© 2020 Ubico Medellin, Colombia</p>
                  </div>
              </div>
            </div>
        )
    }
}

export default SearchBar;