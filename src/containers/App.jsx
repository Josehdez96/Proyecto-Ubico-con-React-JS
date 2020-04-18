import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Principal from "./pages/Principal.jsx"
import Results from "./pages/Results.jsx"


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Principal} />
      <Route exact path="/results" component={Results} />
    </Switch>
  </BrowserRouter>
)

export default App;
