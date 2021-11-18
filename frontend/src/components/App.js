import React from "react";
import { render } from "react-dom";


async function getPolls() {
    const rawResponse = await fetch("api/polls/");
    const data = await rawResponse.json();
}

function App () {
    return <h1>Her bygger vi videre på react koden vår med komponenter osv.</h1>
}

export default App;

const container = document.getElementById("app");
render(<App />, container);