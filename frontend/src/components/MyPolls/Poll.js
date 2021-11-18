import React, {Component, Fragment, useEffect, useState} from 'react'
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import FloatingLabel from "react-bootstrap/esm/FloatingLabel"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Poll () {
        const [poll, setPoll] = useState({})
        const [choice, setChoice] = useState("")
        const [poll_id, setPollId] = useState(null)

        async function getAllPolls() {
            const id = 7;
            const rawResponse = await fetch(`polls/${id}`);
            const data = await rawResponse.json();
            setPoll(data)
            setPollId(id)
        }

        async function updatePollChoice () {
            const payload = {
                "choice_text": choice,
                "poll": poll
            }

            const rawResponse = await fetch('/choices', {
                method : "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            })
        }

        useEffect(() => {
            getAllPolls()
        },[])

        return (
            <Fragment>
                <div style={{ display: "flex", justifyContent: "center" , paddingTop: "40px"}}>
                    <h1>
                        {poll["poll_question"]}
                    </h1>
                </div>
                <div style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}>
                    <Card style={{ width: "60%" }}>
                        <Card.Header className="text-center" >
                            Options
                        </Card.Header>
                        <Card.Body>
                            <ListGroup>
                                {poll && poll.choices?.map((choice => {
                                    return <ListGroup.Item key={choice.text}>
                                    <Row>
                                        <Col md={4}>
                                            {choice.text}
                                        </Col>
                                        <Col md={{ span: 4, offset: 4 }}>
                                            <input type="radio" onChange={(e) => setChoice(e.target.value) } value={choice.text} name="activePollChoice" style={{ width: "20px", height: "20px" }} />
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                }))}
                            </ListGroup>
                            <div className="d-grid gap-2" style={{ marginTop: "20px" }}>
                                <Button onClick={(e) => updatePollChoice()} variant="secondary" size="lg">Vote</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Fragment>
        )
}

export default Poll
