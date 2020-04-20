import React from "react";

import "../resources/styles/SearchingResults.css"

class SearchResultItem extends React.Component {
  render () {
    return (
      <il>
        <div className="card">
          <img src={this.props.provider} className="card-img-top" alt="" id={this.props.design}/>
          <div className="card-body">
            <a href={this.props.URL} class="btn btn-success" id="boton" target="blank">Ir a la pagina</a>
          </div>
        </div>
      </il>
    )
  }
}

export default SearchResultItem;