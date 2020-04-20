import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"

import { createStore } from "redux";
import { Provider } from "react-redux" ;

import App from "./containers/App.jsx";
import reducers from "./reducers"

const store = createStore( //Recibe 2 paramtetros
  reducers, //Todos los Reducers
  {} //Estado inicial  
)

const container = document.getElementById('app')

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, container);
