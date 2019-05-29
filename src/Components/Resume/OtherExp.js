import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const otherExp = () => (
    <Container>
        <h3>Other Experience</h3>
        <hr style={{ backgroundColor: 'white' }} />

        <Row>
            <Col><h4>SERVER, ICHIMI; MIAMI, FL — 2017-2019</h4></Col>
            <Col>
                <ul>
                    <li>Provided great customer service in a busy restaurant in Miami, Florida.</li>
                    <li>Learned a lot about working in a fast-paced environment and working with other people under stress. </li>
                    
                </ul>
            </Col>
        </Row>

        <Row>
            <Col><h4>SERVER, CACTUS FLOWER CAFE, DOTHAN, AL — 2015-2017</h4></Col>
            <Col>
                <ul>
                    <li>Worked and managed the restaurant, worked with customers, and worked in a team environment.</li>                   
                </ul>
            </Col>
        </Row>
    </Container>
)

export default otherExp;