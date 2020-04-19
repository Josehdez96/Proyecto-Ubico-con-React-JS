import React from "react";

import "../resources/styles/SearchingResults.css"
import Amazon from "../resources/providersLogos/Amazon_logo.png"
import Ktronix from "../resources/providersLogos/Ktronix_logo.png"
import Alkosto from "../resources/providersLogos/Alkosto_logo.png"

const SearchingResults = () => (
  <ul className="list">
    <il>
      <div className="card">
        <img src={Amazon} className="card-img-top" alt="Amazon" id="AmazonImage"/>
        <div className="card-body">
          <a href="https://www.amazon.es/" class="btn btn-success" id="boton" target="blank">Ir a la pagina</a>
        </div>
      </div>
    </il>
    <il>
      <div className="card">
        <img src={Ktronix} className="card-img-top" alt="Ktronix" id="KtronixImage"/>
        <div className="card-body">
          <a href="https://www.ktronix.com/" class="btn btn-success" id="boton" target="blank">Ir a la pagina</a>
        </div>
      </div>
    </il>
    <il>
      <div className="card">
        <img src={Alkosto} className="card-img-top" alt="Alkosto" id="AlkostoImage"/>
        <div className="card-body">
          <a href="https://www.alkosto.com/" class="btn btn-success" id="boton" target="blank">Ir a la pagina</a>
        </div>
      </div>
    </il>
  </ul>
)

export default SearchingResults;