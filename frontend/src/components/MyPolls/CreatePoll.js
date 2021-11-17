import React, { Component, Fragment } from 'react'
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import FloatingLabel from "react-bootstrap/esm/FloatingLabel"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export class CreatePoll extends Component {
    render() {
        return (
            <Fragment>
                <div style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}>
                    <Card style={{ width: "60%" }}>
                        <Card.Header className="text-center" >
                            <InputGroup size="lg" className="d-grid gap-2">
                                <FloatingLabel controlId="floatingTextarea" label="Name of poll">
                                    <FormControl placeholder="Name of poll" aria-label="pollHeader" aria-describedby="inputGroup-sizing-sm"></FormControl>
                                </FloatingLabel>
                            </InputGroup>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup>
                                <ListGroup.Item>
                                    <InputGroup className="d-grid gap-2" size="sm" className="d-grid gap-2">
                                        <FloatingLabel controlId="floatingTextarea" label="Poll choice #1">
                                            <FormControl placeholder="Poll choice" aria-label="pollHeader" aria-describedby="inputGroup-sizing-sm"></FormControl>
                                        </FloatingLabel>
                                    </InputGroup>
                                </ListGroup.Item>
                            </ListGroup>
                            <Row  style={{ margin: "10px"}}>
                                <Col md={4}>
                                    <a> Active </a>
                                    <input type="radio" value="option1" name="activeStatus" style={{ margin: "5px"}}/>
                                    <input type="radio" value="option2" name="activeStatus" style={{ margin: "5px"}}/>
                                </Col>
                                <Col md={{ span: 4, offset: 4 }} style={{ display: "flex", justifyContent: "right" }}>
                                    <a> Public </a>
                                    <input type="radio" value="option3" name="publicStatus" style={{ margin: "5px"}}/>
                                    <input type="radio" value="option4" name="publicStatus" style={{ margin: "5px"}}/>
                                </Col>
                            </Row>
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

export default CreatePoll
