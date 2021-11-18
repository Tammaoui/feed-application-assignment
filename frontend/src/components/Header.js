import React, {Fragment} from "react";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import {
  Routes ,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Poll from "./MyPolls/Poll";
import PollPage from "../pages/PollPage";

function Header() {
        return (
            <Fragment>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">FeedApp</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-auto">
                                <Link to="/home">Home</Link>
                                <Link to="/profile" style={{paddingLeft: "40px"}}>Profile</Link>
                                <Link to="/polls" style={{paddingLeft: "40px"}}>Polls</Link>
                            </Nav>
                            <Navbar.Brand style={{color: 'transparent'}}>FeedApp</Navbar.Brand>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/polls" element={<PollPage/>}/>
                </Routes>
            </Fragment>
        );
}
export default Header;