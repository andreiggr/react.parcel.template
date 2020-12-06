import "../polyfills";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore(); // You can also pass in an initialState here if u want

const isIE = false || !!document.documentMode;

var mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    {isIE && (
      <p className="ie-warning">
        IMPORTANT: This website is not optimised for Internet Explorer. For the
        best experience, please use another browser.
      </p>
    )}
    <App />
  </Provider>,
  mountNode
);
