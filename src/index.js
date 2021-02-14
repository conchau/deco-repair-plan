import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App";
import { createStore } from "redux";
import allReducers from "./reducers";
import {Provider} from "react-redux";


// STORE -> GLOBALIZED STATE
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
        <Route path="/" component={App} />
    </Provider>
  </BrowserRouter>
  ), document.getElementById("root"));


// USE REACT ROUTER TRANSITION