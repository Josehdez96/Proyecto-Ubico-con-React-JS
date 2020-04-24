import React from "react";
import { connect } from "react-redux"

import Amazon from "../resources/providersLogos/Amazon_logo.png"
import Ktronix from "../resources/providersLogos/Ktronix_logo.png"
import Alkosto from "../resources/providersLogos/Alkosto_logo.png"
import SearchResultItem from "./SearchResultItem";


const SearchingResults = searchReducer => {
  return (
  <ul className="list">
    <SearchResultItem provider={Amazon} design="AmazonImage" URL={`https://www.amazon.com/s?k=${searchReducer.finalSearchValue.searchValue}&__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss`} />
    <SearchResultItem provider={Ktronix} design="KtronixImage" URL={`https://www.ktronix.com/salesperson/result/?q=${searchReducer.finalSearchValue.searchValue}`} />
    <SearchResultItem provider={Alkosto} design="AlkostoImage" URL={`https://www.alkosto.com/salesperson/result/?q=${searchReducer.finalSearchValue.searchValue}`} />
  </ul> 
  )
}

 const mapStateToProps = reducers => {
   return reducers.searchReducer
 }

export default connect(mapStateToProps, null)(SearchingResults);