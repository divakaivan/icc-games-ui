import React from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";

const lecTeams = ["MSF", "G2", "OG", "RGE", "MAD", "FNC", "XL", "SK", "S04", "VIT"];

/**
 * Navigation bar component at the top of the app. Contains hrefs to different pages.
 */
const NavBar = () => {

    return (
        <Navbar bg="primary" expand="md" variant="dark">
            <Navbar.Brand href="/">Your (LoL) Esports Bar</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse>
                <Nav className="">
                    <Nav.Link className="nav-link" href="/">All games</Nav.Link>
                    <Nav.Link className="nav-link" href="/new">Add game</Nav.Link>
                    <NavDropdown title="LEC" id="collasible-nav-dropdown">
                        {lecTeams.map(lecTeam=>
                            <NavDropdown.Item key={lecTeam} href={`/${lecTeam}/all`}>{lecTeam}</NavDropdown.Item>
                        )}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBar;