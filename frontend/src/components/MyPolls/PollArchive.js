import React, {Component, Fragment, useEffect, useState} from 'react'
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import "./poll.css"
import {useSetRecoilState} from "recoil";
import {activePollEdit} from "../../states/atoms";

function PollArchive({polls}) {

        const setActivePoll = useSetRecoilState(activePollEdit)

        return (
            <Fragment>
                <div style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}>
                    <Card style={{ width: "60%" }}>
                        <Card.Header className="text-center" ><h3>Polls</h3></Card.Header>
                        <Card.Body>
                            <ListGroup>
                                {polls.map((poll, index) => {
                                    return <ListGroup key={index} onClick={() => setActivePoll(poll.id)} className="poll-list-element">{poll.poll_question}</ListGroup>
                                })}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </div>
            </Fragment>
        )
}

export default PollArchive
