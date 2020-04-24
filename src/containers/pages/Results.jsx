import React from "react";
import HeroResults from "../../components/HeroResults.jsx"
import SearchingResults from "../../components/SearchingResults.jsx";


class Results extends React.Component {
  render () {
    return (
      <div className="Results"> 
        <HeroResults />
        <SearchingResults />
      </div>
    )
  }
}

export default Results; 
