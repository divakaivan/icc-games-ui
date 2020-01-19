import React, {useState} from "react";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";

const NavBar = () => {

    return (
        <Navbar bg="primary" expand="sm" variant="dark">
            <Navbar.Brand href="/">Your Esports Bar</Navbar.Brand>
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