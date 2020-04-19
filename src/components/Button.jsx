import React from "react"
import { Link } from "react-router-dom"

import "../resources/styles/Button.css"

class Button extends React.Component {
    render() {
    return (
      <div className="col-12">
        <Link 
        to={this.props.whereItGo}
        searchValue={this.props.searchValue}
        onClick={this.props.onClick} 
        className="btn btn-primary" 
        id="button-searchbar">

        {this.props.buttonTitle}

        </Link>
      </div>
    )
  }
}

export default Button;