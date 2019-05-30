import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const links = (props) => (
    <Container>
        <Row className="project-links">
            <Col>
                <h6>Project Link</h6>
                <a href={props.project} rel="noopener noreferrer" target="_blank">
                    <i className="fas fa-code" aria-hidden="true" />
                </a>
            </Col>

            <Col>
                <h6>Github Link</h6>
                <a href={props.github} rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-github" aria-hidden="true" />
                </a>
            </Col>
        </Row>
    </Container>
);

export default links;