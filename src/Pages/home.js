import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

import Footer from "../Components/Footer";
// import NavBar from "../Components/NavBar";

import adhyaay_logo from "../res/ADHYAAY_LOGO.png";
import adhyaay_logo_white from "../res/ADHYAAY_LOGO_WHITE.png";
// import Footer2 from '../Components/Footer2';

const home = () => {
    const homeStyle = {
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgb(33, 29, 33)',
    };
    const aboutStyle = {
        height: '400px',
        width: '100vw',
        backgroundColor: 'black',
    };

    return (
        <section>
            {/* <NavBar /> */}
            <center>
                <div style={homeStyle} className="d-flex align-items-center justify-content-center">
                    <Image overflow="hidden" src={adhyaay_logo} rounded style={{ height: "200px", width: "230px", }} />
                </div>
                <div style={aboutStyle}>
                    <Container>
                        <Row>
                            <Col style={{ color: "white", textAlign: "left", }} xs={8}>
                                <br></br><br></br><br></br>
                                <h1 style={{ fontSize: "65px", }}>About</h1>
                                <br></br>
                                <p >Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                </p>
                            </Col>
                            <Col style={{ textAlign: "left", height: "400px", }}>
                                <div style={{ height: "100%", width: "100%", }} className="d-flex align-items-center justify-content-center">
                                    <Image overflow="hidden" src={adhyaay_logo_white} rounded style={{ height: "200px", width: "230px", }} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </center>
            <Footer />
        </section>
    )
}

export default home