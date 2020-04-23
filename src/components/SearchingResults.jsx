import React from "react";
import { connect } from "react-redux"
import * as searchReducer from "../reducers/searchReducer"

import Amazon from "../resources/providersLogos/Amazon_logo.png"
import Ktronix from "../resources/providersLogos/Ktronix_logo.png"
import Alkosto from "../resources/providersLogos/Alkosto_logo.png"
import SearchResultItem from "./SearchResultItem";


const SearchingResults = ({finalSearchValue}) => {
  console.log(finalSearchValue)
  return (
  <ul className="list">
    <SearchResultItem provider={Amazon} design="AmazonImage" URL="https://www.amazon.es/" />
    <SearchResultItem provider={Ktronix} design="KtronixImage" URL={`https://www.ktronix.com/salesperson/result/?q=${finalSearchValue}`} />
    <SearchResultItem provider={Alkosto} design="AlkostoImage" URL="https://www.alkosto.com/" />
  </ul> 
  )
}

 const mapStateToProps = searchReducer => {
   return {
      searchReducer.finalSearchValue
   }
 }

export default connect(mapStateToProps, null)(SearchingResults);