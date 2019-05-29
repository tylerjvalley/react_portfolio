import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const education = (props) => (
    <Container>
        <h3>Education</h3>
        <hr style={{ backgroundColor: 'white' }} />

        <Row>
            <Col>
                <p>{props.startYear} - {props.endYear}</p>
            </Col>

            <Col>
                <h4 style={{marginTop: '0px'}}>{props.school}</h4>
                <p>{props.schoolDescription}</p>
            </Col>
        </Row>

        <Row>
            <Col>
                <p>{props.highscStart} - {props.highscEbd}</p>
            </Col>

            <Col>
                <h4 style={{ marginTop: '0px' }}>{props.highSchool}</h4>
                <p>{props.highSchoolDescription}</p>
            </Col>
        </Row>
    </Container>
)


export default education;