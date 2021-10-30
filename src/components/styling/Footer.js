import React from 'react'
import { Container, Col, Row} from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='footer fixed-bottom'>
            <Container>
                <Row>
                    <Col xs={10}>
                     2021 Barista Companion
                    </Col>

                    <Col mr={1}>
                    <a href='https://github.com/David-P-Molina/Barista-Companion-App'>Github Link</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
