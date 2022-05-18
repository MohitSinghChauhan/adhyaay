import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import '../App.css';

import Card from 'react-bootstrap/Card';
// import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import adhyaay_logo from "../res/ADHYAAY_LOGO.png";
// import { CardGroup } from 'react-bootstrap';

const sponsors = () => {
    return(
        <section style={{backgroundColor: "rgb(33, 29, 33)", height: "200vh",}}>
            <br></br>
            <p style={{color: "rgb(255, 251, 242)", fontSize: "40px", fontWeight: "bold", textAlign: "center",}}>Paisa dene waale log-bhag</p>
            <br></br>
            <center>
            <div style={{width: "80vw", height: "200vh", backgroundColor: "blue",}}>
                <Row xs={1} md={3} className="g-3">
                    <Col>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={adhyaay_logo} />
                            <Card.Body>
                                <Card.Title>Paisa dene wale ka naam</Card.Title>
                                <Card.Text>
                                Kuch or dalna ho to yaha dalo
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={adhyaay_logo} />
                            <Card.Body>
                                <Card.Title>Paisa dene wale ka naam</Card.Title>
                                <Card.Text>
                                Kuch or dalna ho to yaha dalo
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={adhyaay_logo} />
                            <Card.Body>
                                <Card.Title>Paisa dene wale ka naam</Card.Title>
                                <Card.Text>
                                Kuch or dalna ho to yaha dalo
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br></br>
                <Row xs={1} md={3} className="g-3">
                    <Col>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={adhyaay_logo} />
                            <Card.Body>
                                <Card.Title>Paisa dene wale ka naam</Card.Title>
                                <Card.Text>
                                Kuch or dalna ho to yaha dalo
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={adhyaay_logo} />
                            <Card.Body>
                                <Card.Title>Paisa dene wale ka naam</Card.Title>
                                <Card.Text>
                                Kuch or dalna ho to yaha dalo
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={adhyaay_logo} />
                            <Card.Body>
                                <Card.Title>Paisa dene wale ka naam</Card.Title>
                                <Card.Text>
                                Kuch or dalna ho to yaha dalo
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            </center>
            
        </section>
    )
}

export default sponsors;