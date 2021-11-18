import React, {Fragment} from "react";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import {
    Routes,
    Route,
    Link, useHistory, withRouter
} from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import PollPage from "../pages/PollPage";
import Poll from "./MyPolls/Poll";
function Header() {
        return (
            <Fragment>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">FeedApp</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-auto">
                                <Link to="/">Home</Link>
                                <Link to="/profile" style={{paddingLeft: "40px"}}>Profile</Link>
                                <Link to="/polls" style={{paddingLeft: "40px"}}>Polls</Link>
                            </Nav>
                            <Navbar.Brand style={{color: 'transparent'}}>FeedApp</Navbar.Brand>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/polls/:id" element={<Poll/>}/>
                    <Route path="/polls" element={<PollPage/>}/>
                </Routes>
            </Fragment>
        );
}
export default Header;