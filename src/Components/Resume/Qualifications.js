import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';


const qualifications = () => (
    <Container>
        <h3>Skills and Qualifications</h3>
        <hr style={{backgroundColor: 'white'}} />

        <Row>
            <Col><h4>ReactJS</h4></Col>
            <Col><ProgressBar striped variant="info" now={100} /></Col>
        </Row>

        <Row>
            <Col><h4>JS</h4></Col>
            <Col><ProgressBar striped variant="info" now={100} /></Col>
        </Row>

        <Row>
            <Col><h4>HTML</h4></Col>
            <Col><ProgressBar striped variant="info" now={100} /></Col>
        </Row>

        <Row>
            <Col><h4>CSS</h4></Col>
            <Col><ProgressBar striped variant="info" now={100} /></Col>
        </Row>

        <Row>
            <Col><h4>Ruby/Rails</h4></Col>
            <Col><ProgressBar striped variant="info" now={60} /></Col>
        </Row>

        <Row>
            <Col><h4>WordPress</h4></Col>
            <Col><ProgressBar striped variant="info" now={40} /></Col>
        </Row>
    </Container>
)


export default qualifications;