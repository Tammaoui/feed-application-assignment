import React from "react";
import { render } from "react-dom";

function App () {
    return <h1>Her bygger vi videre på react koden vår med komponenter osv.</h1>
}

export default App;

const container = document.getElementById("app");
render(<App />, container);