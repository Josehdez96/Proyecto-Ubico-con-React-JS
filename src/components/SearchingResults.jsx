import React from "react";


import Amazon from "../resources/providersLogos/Amazon_logo.png"
import Ktronix from "../resources/providersLogos/Ktronix_logo.png"
import Alkosto from "../resources/providersLogos/Alkosto_logo.png"
import SearchResultItem from "./SearchResultItem";


const SearchingResults = () => (
  <ul className="list">
    <SearchResultItem provider={Amazon} design="AmazonImage" URL="https://www.amazon.es/" />
    <SearchResultItem provider={Ktronix} design="KtronixImage" URL="https://www.ktronix.com/" />
    <SearchResultItem provider={Alkosto} design="AlkostoImage" URL="https://www.alkosto.com/" />
  </ul> 
)

export default SearchingResults;