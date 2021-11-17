import React, { Fragment } from "react";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom";
import Profile from "./components/Profile"
import Header from "./components/Header"
import Home from "./components/Home"
import PollArchive from "./components/MyPolls/PollArchive"
import CreatePoll from "./components/MyPolls/CreatePoll"
import Poll from "./components/MyPolls/Poll"

const App = () => {
  return (
    <Fragment>
      <Header />
      <Poll />
    </Fragment>
  )
};

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById("app")
);
