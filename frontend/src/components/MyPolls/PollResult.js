import React, { useState, Fragment, useEffect } from 'react'
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ListGroup from "react-bootstrap/ListGroup"


function PollResult() {
    const [poll, setPoll] = useState({})

    async function getPollResultById(id) {
        const rawResponse = await fetch(`polls/${id}`);
        const data = await rawResponse.json();
        setPoll(data)
    }

    useEffect(() => {
        getPollResultById(1)
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
                            Results
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
                                            Number of votes: {choice.votes}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                }))}
                            </ListGroup>
                           
                        </Card.Body>
                    </Card>
                </div>
            </Fragment>
    )
}

export default PollResult
