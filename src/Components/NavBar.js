import React from "react"
import { Navbar, Nav, Container } from 'react-bootstrap'
import img from './assets/logo.png'
import { Link } from 'react-router-dom'

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
                        <Link className='navLinks1' to="/" >Home</Link>
                        <Link className='navLinks1' to="/events">Events</Link>
                        <Link className='navLinks1' to="/sponsers">Sponsors</Link>
                        <Link className='navLinks1' to="/gallery">Gallery</Link>
                        <Link className='navLinks1' to="/subCouncils">Sub-Councils</Link>
                        <Link className='navLinks1' to="/ourTeam">ourTeam</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar