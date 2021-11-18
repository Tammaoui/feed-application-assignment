import React, {Fragment, useEffect, useState} from "react";
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {useHistory} from "react-router-dom";

function Home() {
    const [pollsFromSearch, setPollsFromSearch] = useState([])
    async function getSearchQuery(e) {
        const searchQuery = e.target.value;
        const rawResponse = await fetch(`api/polls/search/${searchQuery}`)
        const polls = await rawResponse.json();
        setPollsFromSearch(polls)
    }

    function handleOnClick(id) {
        window.location.href = `http://127.0.0.1:8000/polls/${id}`;
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
                        onChange={(e) => getSearchQuery(e)}
                    />
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
                                        <Col onClick={() => handleOnClick(poll.id)} style={{cursor:"pointer"}} md={4}>
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