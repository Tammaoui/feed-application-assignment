import React, { Fragment } from "react";
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Fredrik",
            pollChoice: "Pizza",
            poll: "Favorittmat"
        }
    }

    render() {
        return (
            <Fragment>
                <div style={{display: "flex", justifyContent: "center", paddingTop: "40px"}}>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </div>
                <div style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}>
                    <Card style={{ width: "60%" }}>
                        <Card.Header className="text-center" ><h2>Latest votes</h2></Card.Header>
                        <Card.Body>
                            <ListGroup>
                                <ListGroup.Item>{this.state.name} har svart "{this.state.pollChoice}" på "{this.state.poll}"</ListGroup.Item>
                                <ListGroup.Item>Test</ListGroup.Item>
                                <ListGroup.Item>Test</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </div>
            </Fragment>
        );
    }
}

export default Home;