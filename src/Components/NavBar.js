import React from "react"
import { Navbar, Nav, Container } from 'react-bootstrap'
import img from './assets/logo.png'

const NavBar = () => {
    return (
        <Navbar style={{ 'background-color': "#E0E0E0", }} variant="light" expand="lg">
            <Container>
                <Navbar.Brand style={{ 'font-size': "25px", }} align-items-center href="#home">
                    <img
                        alt="img"
                        src={img}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                    Adhyaay</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#events">Events</Nav.Link>
                        <Nav.Link href="#sponsors">Sponsors</Nav.Link>
                        <Nav.Link href="#Gallery">Gallery</Nav.Link>
                        <Nav.Link href="#subCouncils">Sub-Councils</Nav.Link>
                        <Nav.Link href="#ourTeam">ourTeam</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar