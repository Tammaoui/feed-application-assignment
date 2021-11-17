import React, { Fragment } from "react";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom";
import Header from "./components/Header"

import {
  BrowserRouter as Router,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
    </Router>
  )
};

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById("app")
);
