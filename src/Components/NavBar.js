import React from "react"
import { Navbar, Nav, Container } from 'react-bootstrap'
import img from './assets/logo.png'
import { Link } from 'react-router-dom'

import '../Pages/styleAyush/navbar.css'

const NavBar = () => {
    return (
        <Navbar style={{ 'position': "fixed", 'width': "100vw", 'color': "rgb(255,255,255)", }} variant="dark" expand="lg">
            <Container>
                <Navbar.Brand style={{ 'font-size': "20px", }} align-items-center href="/">
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
                        <Link className='navLinks1' to="/" >Home &nbsp;</Link>
                        <Link className='navLinks1' to="/events0">Events &nbsp;</Link>
                        <Link className='navLinks1' to="/sponsers">Sponsors &nbsp;</Link>
                        <Link className='navLinks1' to="/gallery">Gallery &nbsp;</Link>
                        <Link className='navLinks1' to="/subCouncils">Sub-Councils &nbsp;</Link>
                        <Link className='navLinks1' to="/ourTeam">ourTeam &nbsp;</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar