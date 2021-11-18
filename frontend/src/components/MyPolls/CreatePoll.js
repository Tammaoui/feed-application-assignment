import React, {Fragment, useEffect, useState} from 'react'
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import FloatingLabel from "react-bootstrap/esm/FloatingLabel"
import PollArchive from "./PollArchive";
import {activePollEdit} from "../../states/atoms";
import {useRecoilState} from "recoil";


function CreatePoll(){

    const [pollQuestion, setPollQuestion] = useState("");
    const [isPublic, setPublic] = useState(false);
    const [active, setActive] = useState(false);
    const [pollChoices, setPollChoices] = useState([{choice_text: ""}]);
    const [activePollId, setActivePollId] = useRecoilState(activePollEdit);

    const [creating, setCreating] = useState(true)
    const [responseMessage, setResponseMessage] = useState()
    const [isSubmitting, setIsSumbitting] = useState(false);
    const [polls, setPolls] = useState([])

    async function savePoll() {
        setIsSumbitting(true);
        const payload = {
            "poll_question": pollQuestion,
            "active": active,
            "public": isPublic,
            "poll_choices": pollChoices
        }
        const rawResponse = await fetch('api/polls', {
            method : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        const response = await rawResponse.text()

        setResponseMessage(response)

        if(rawResponse.status === 201) {
            setPollQuestion("");
            setPollChoices([]);
            setActivePollId(-1);
            await getAllUserPolls();
        }

        setIsSumbitting(false);
    }

    function addChoice() {
        setPollChoices([...pollChoices, {choice_text: ""}])
    }
    function deleteChoice(text) {
        const index = pollChoices.findIndex(({ choice_text }) => choice_text === text);
        if (index !== -1) {
          setPollChoices([
            ...pollChoices.slice(0, index),
            ...pollChoices.slice(index + 1)
          ]);
        }
    }

    function onChoiceChange(e, idx) {
        let copy = [...pollChoices];
        copy[idx].choice_text = e.target.value;
        setPollChoices(copy);
    }

    async function getAllUserPolls() {
        const rawResponse = await fetch('api/polls');
        const data = await rawResponse.json();
        setPolls(data)
    }

    useEffect(() => {
        if(activePollId !== -1) {

            let currentPoll = polls.filter(p => p.id === activePollId)[0];
            console.log(currentPoll)
            let choices = currentPoll.choices;
            let question_text = currentPoll.poll_question;
            console.log(choices)
            setPollChoices(choices);
            setPollQuestion(question_text);

            setCreating(false);
        }
        getAllUserPolls();

    }, [activePollId])

    async function deletePoll() {
        setIsSumbitting(true);

        const payload = {
            'id': activePollId
        }
        const rawResponse = await fetch('api/polls', {
            method : "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        const message = await rawResponse.text();
        setResponseMessage(message);

        if(rawResponse.status === 200) {
            setPollChoices([]);
            setPollQuestion("");
            setActivePollId(-1);
        }

        setIsSumbitting(false);
    }

    return (
            <Fragment>
                <h2>{creating ? "Create a poll" : "Edit a poll"}</h2>
                <div style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}>
                    <Card style={{ width: "60%" }}>
                        <Card.Header className="text-center" >
                            <InputGroup size="lg" className="d-grid gap-2">
                                <FloatingLabel controlId="floatingTextarea" label="Name of poll">
                                    <FormControl value={pollQuestion} onChange={(e) => setPollQuestion(e.target.value)} placeholder="Name of poll" aria-label="pollHeader" aria-describedby="inputGroup-sizing-sm"/>
                                </FloatingLabel>
                            </InputGroup>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup>
                                {pollChoices.map((choice, index) => {
                                    return <ListGroup.Item key={index}>
                                        <input onChange={(e) => onChoiceChange(e, index) } style={{width: "95%", padding: "10px"}} placeholder={"Write text"}  value={choice.choice_text} type="text"></input>&nbsp;&nbsp;
                                        {creating && <span style={{cursor: "pointer", color: "red"}}
                                               onClick={() => deleteChoice(choice.choice_text)}>X</span>}
                                    </ListGroup.Item>
                                })}
                            </ListGroup>
                            <Button style={{marginTop: "20px"}} onClick={addChoice} variant="secondary" size="sm">Add choice</Button>
                        </Card.Body>
                        {creating ? <Button disabled={isSubmitting} onClick={savePoll} variant="secondary" size="lg">Save</Button> : <Button disabled={isSubmitting} onClick={deletePoll} variant="secondary" size="lg">Delete poll</Button> }
                        {responseMessage && <p style={{marginTop: "20px"}}>{responseMessage}</p>}
                    </Card>
                </div>
                <PollArchive polls={polls}/>
            </Fragment>
        )
}

export default CreatePoll
