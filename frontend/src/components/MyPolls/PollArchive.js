import React, { Component, Fragment } from 'react'
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"

export class PollArchive extends Component {
    render() {
        return (
            <Fragment>
                <div style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}>
                    <Card style={{ width: "60%" }}>
                        <Card.Header className="text-center" ><h3>Active Polls</h3></Card.Header>
                        <Card.Body>
                            <ListGroup>
                                <ListGroup.Item>Test</ListGroup.Item>
                                <ListGroup.Item>Test</ListGroup.Item>
                                <ListGroup.Item>Test</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </div>
                <div style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}>
                    <Card style={{ width: "60%" }}>
                        <Card.Header className="text-center" ><h3>Archived Polls</h3></Card.Header>
                        <Card.Body>
                            <ListGroup>
                                <ListGroup.Item>Test</ListGroup.Item>
                                <ListGroup.Item>Test</ListGroup.Item>
                                <ListGroup.Item>Test</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </div>
            </Fragment>
        )
    }
}

export default PollArchive
