import { Row, Col, Container } from 'react-bootstrap';
import img from './assets/logo.png';

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
                    <Col sm className='icons'></Col>
                </Row>
            </Container>
        </section>

    );
}

export default Footer