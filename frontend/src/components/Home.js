import React, { Fragment, useState } from "react";
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Home() {
    const [searchQuery, setSearchQuery] = useState("")
    const [pollsFromSearch, setPollsFromSearch] = useState([])

    async function getSearchQuery() {
        const rawResponse = await fetch(`api/polls/search/${searchQuery}`)
        const polls = await rawResponse.json();
        setPollsFromSearch(polls)
    }

    return (
        <Fragment>
            <div style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button onClick={(e) => getSearchQuery()} variant="outline-success">Search</Button>
                </Form>
            </div>

            <div style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}>
                <Card style={{ width: "60%" }}>
                    <Card.Header className="text-center" >
                        Search Results
                    </Card.Header>
                    <Card.Body>
                        <ListGroup>
                            {pollsFromSearch && pollsFromSearch?.map((poll => {
                                return <ListGroup.Item key={poll.id}>
                                    <Row>
                                        <Col md={4}>
                                            {poll.poll_question}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            }))}
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>

            <div style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}>
                <Card style={{ width: "60%" }}>
                    <Card.Header className="text-center" ><h3>Latest votes</h3></Card.Header>
                    <Card.Body>
                        <ListGroup>
                            <ListGroup.Item>har svart "" p"</ListGroup.Item>
                            <ListGroup.Item>Test</ListGroup.Item>
                            <ListGroup.Item>Test</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        </Fragment>
    );
}

export default Home;