import React from "react"
import { Navbar, Nav, Container } from 'react-bootstrap'
import img from './assets/logo.png'

import '../Pages/styleAyush/navbar.css'

const NavBar = () => {
    return (
        <Navbar style={{ 'height': "8vh", 'position': "fixed", 'width': "100vw", 'color': "rgb(255,255,255)", }} variant="dark" expand="lg">
            <Container>
                <Navbar.Brand style={{ 'font-size': "20px", }} align-items-center href="#home">
                    <img
                        alt="img"
                        src={img}
                        width="25"
                        height="25"
                        className="d-inline-block align-top"
                    />{' '}
                    Adhyaay</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={{ 'font-size': "10px", }} className="navLinks ms-auto">
                        <Nav.Link className='navLinks1' href="#home">Home</Nav.Link>
                        <Nav.Link className='navLinks1' href="#events">Events</Nav.Link>
                        <Nav.Link className='navLinks1' href="#sponsors">Sponsors</Nav.Link>
                        <Nav.Link className='navLinks1' href="#Gallery">Gallery</Nav.Link>
                        <Nav.Link className='navLinks1' href="#subCouncils">Sub-Councils</Nav.Link>
                        <Nav.Link className='navLinks1' href="#ourTeam">ourTeam</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar