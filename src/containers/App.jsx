import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../components/Layout.jsx"
import Principal from "./pages/Principal.jsx"
import Results from "./pages/Results.jsx"
import NotFound from "./pages/NotFound.jsx"


const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route exact path="/results" component={Results} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App;
