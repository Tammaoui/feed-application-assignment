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
        const [choice, setChoice] = useState(-1)
        const [responseMessage, setResponseMessage] = useState(undefined)

        async function getAllPolls() {
            const id = 1;
            const rawResponse = await fetch(`polls/${id}`);
            const data = await rawResponse.json();
            setPoll(data)
        }

        async function updatePollChoice () {
            const payload = {
                "choice_id": choice
            }

            const rawResponse = await fetch('/choices', {
                method : "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            })
            const message = await rawResponse.text()
            setResponseMessage(message)
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
                                            <input type="radio" onChange={(e) => setChoice(e.target.value) } value={choice.id} name="activePollChoice" style={{ width: "20px", height: "20px" }} />
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
                    {responseMessage && <p>{responseMessage}</p>}
                </div>
            </Fragment>
        )
}

export default Poll
