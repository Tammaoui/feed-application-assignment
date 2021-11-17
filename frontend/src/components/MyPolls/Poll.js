import React, { Component, Fragment } from 'react'
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import FloatingLabel from "react-bootstrap/esm/FloatingLabel"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export class Poll extends Component {
    render() {
        return (
            <Fragment>
                <div style={{ display: "flex", justifyContent: "center" , paddingTop: "40px"}}>
                    <h1>
                        Question
                    </h1>
                </div>
                <div style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}>
                    <Card style={{ width: "60%" }}>
                        <Card.Header className="text-center" >
                            Options
                        </Card.Header>
                        <Card.Body>
                            <ListGroup>
                                <ListGroup.Item>
                                    <Row>
                                        <Col md={4}>
                                            Cat
                                        </Col>
                                        <Col md={{ span: 4, offset: 4 }}>
                                            <input type="radio" value="optionX" name="activePollChoice" style={{ width: "20px", height: "20px" }} />
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col md={4}>
                                            Dog
                                        </Col>
                                        <Col md={{ span: 4, offset: 4 }}>
                                            <input type="radio" value="optionX" name="activePollChoice" style={{ width: "20px", height: "20px" }} />
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col md={4}>
                                            Horse
                                        </Col>
                                        <Col md={{ span: 4, offset: 4 }}>
                                            <input type="radio" value="optionX" name="activePollChoice" style={{ width: "20px", height: "20px" }} />
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                            <div className="d-grid gap-2" style={{ marginTop: "20px" }}>
                                <Button variant="secondary" size="lg">Add option</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Fragment>
        )
    }
}

export default Poll
