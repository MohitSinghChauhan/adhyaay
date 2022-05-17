import { Row, Col, Container } from 'react-bootstrap';
import img from './assets/logo.png';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <section className='footer'>
            <Container>
                <Row>
                    <Col sm><img
                        alt="img"
                        src={img}
                        width="100"
                        height="100"
                        className="d-inline-block align-top"
                    /></Col>
                    <Col sm xs={5}>ADHYAAY</Col>
                    <Col sm className='icons'>
                        <a href="https://www.facebook.com/ayush.rajput.37266136/"><FaFacebookSquare /></a>
                        &emsp;
                        <a href="https://www.instagram.com/its_awsom"><FaInstagram /></a>
                        &emsp;
                        <a href="https://www.linkedin.com/ayushsom1"><FaLinkedin /></a>
                    </Col>
                </Row>
            </Container>
        </section>

    );
}

export default Footer