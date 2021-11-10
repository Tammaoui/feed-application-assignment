import React from "react";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom";
import "./App.scss";

const App = () => {
  return <h2>Heii</h2>;
};

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById("app")
);
