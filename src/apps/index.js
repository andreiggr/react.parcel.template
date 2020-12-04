import "../polyfills";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const isIE = false || !!document.documentMode;

var mountNode = document.getElementById("app");
ReactDOM.render(
  <React.Fragment>
    {isIE && (
      <p className="ie-warning">
        IMPORTANT: This website is not optimised for Internet Explorer. For the
        best experience, please use another browser.
      </p>
    )}
    <App />
  </React.Fragment>,
  mountNode
);
