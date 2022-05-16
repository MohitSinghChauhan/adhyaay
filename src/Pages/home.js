import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

const home = () => {
    const homeStyle = {
        height: '100vh',
        width: '100vw',
        backgroundColor: 'lightblue',
    };
    const aboutStyle = {
        height: '400px',
        width: '100vw',
        backgroundColor: 'blue',
    };
    return(
        <section>
            {/* NAVBAR */}
            <center>
                <div style={homeStyle} className="d-flex align-items-center justify-content-center">
                    <Image overflow="hidden" src="https://media-exp1.licdn.com/dms/image/C4D03AQE9C8alC_Atxw/profile-displayphoto-shrink_200_200/0/1634316038423?e=1658361600&v=beta&t=GM3k1G3MESgdUGbsKOSXdKzHmlxjYDoHywYrKxVAA7E" rounded/>
                </div>

                <div style={aboutStyle}>
                    <Container>
                        <Row>
                            <Col style={{backgroundColor: "red", textAlign: "left",}} xs={8}>
                                <br></br><br></br><br></br>
                                <h1 style={{fontSize: "65px",}}>About</h1>
                                <br></br>
                                <p >Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                                </p>
                            </Col>
                            <Col style={{backgroundColor: "green", textAlign: "left", height: "400px",}}>
                                <div style={{height: "100%", width: "100%",}} className="d-flex align-items-center justify-content-center">
                                <Image overflow="hidden" src="https://media-exp1.licdn.com/dms/image/C4D03AQE9C8alC_Atxw/profile-displayphoto-shrink_200_200/0/1634316038423?e=1658361600&v=beta&t=GM3k1G3MESgdUGbsKOSXdKzHmlxjYDoHywYrKxVAA7E" rounded/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* FOOTER */}
            </center>
        </section>
    )
}

export default home