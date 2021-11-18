import React from "react";
import './polls.css'
import CreatePoll from "../components/MyPolls/CreatePoll";
import Poll from "../components/MyPolls/Poll";
import PollArchive from "../components/MyPolls/PollArchive";
// Tar for seg opprettelse av polls, og viser eksisterende polls.

function PollPage() {
    return <div className="poll-container">
        <h2>Polls</h2>
        <CreatePoll/>
    </div>
}

export default PollPage;