import React, {useEffect} from 'react'
import PollResult from "../components/MyPolls/PollResult";

function PollResultPage({}) {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const pollId = urlParams.get('id')

    return <PollResult poll={pollId}/>

}

export default PollResultPage;