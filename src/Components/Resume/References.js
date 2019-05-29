import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const references = (props) => (
    <Container>

        <h3>References</h3>
        <hr style={{ backgroundColor: 'white' }} />

        <Row>
            <Col><h4>{props.name1}</h4></Col>
            <Col><p>{props.number1}</p></Col>
        </Row>

        <Row>
            <Col><h4>{props.name2}</h4></Col>
            <Col><p>{props.number2}</p></Col>
        </Row>

        <Row>
            <Col><h4>{props.name3}</h4></Col>
            <Col><p>{props.number3}</p></Col>
        </Row>
    </Container>
);


export default references;