import React, { useState, Fragment, useEffect } from 'react'
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ListGroup from "react-bootstrap/ListGroup"


function PollResult({poll}) {

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
                                {poll && poll.choices?.map((choice, index) => {
                                    return <ListGroup.Item key={index}>
                                    <Row>
                                        <Col md={4}>
                                            {choice.choice_text}
                                        </Col>
                                        <Col md={{ span: 4, offset: 4 }}>
                                            Number of votes: {choice.votes}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                })}
                            </ListGroup>
                           
                        </Card.Body>
                    </Card>
                </div>
            </Fragment>
    )
}

export default PollResult
