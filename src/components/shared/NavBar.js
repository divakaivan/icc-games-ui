import React from "react";
import {Navbar, Nav} from "react-bootstrap";

/**
 * Navigation bar component at the top of the app. Contains hrefs to different pages.
 */
const NavBar = () => {

    return (
        <Navbar bg="primary" expand="sm" variant="dark">
            <Navbar.Brand href="/">Your (LoL) Esports Bar</Navbar.Brand>
            <Nav className="mr-0">
                <Nav.Link className="nav-link" href="/">All games</Nav.Link>
                <Nav.Link className="nav-link" href="/new">Add game</Nav.Link>
                <Nav.Link className="nav-link" href="/FNC/all">FNC</Nav.Link>
                <Nav.Link className="nav-link" href="/G2/all">G2</Nav.Link>
            </Nav>
        </Navbar>
    )
};

export default NavBar;