import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import App from "./containers/App.jsx";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux" ;
import reduxThunk from "redux-thunk"

import reducers from "./reducers"

const store = createStore( //Recibe 2 paramtetros
  reducers, //Todos los Reducers
  {}, //Estado inicial
  applyMiddleware(reduxThunk)
)

const container = document.getElementById('app')

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, 
container);
