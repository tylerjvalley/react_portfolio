import React from 'react';
import Card from 'react-bootstrap/Card';
import Links from '../Links/Links';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import reactPic from '../../../Images/reactjs.png';
import messagePic from '../../../Images/messaging.png';


const react = () => {

    return (
        <Container>
            <Row className="row">
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={reactPic} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <hr />
                            <Links />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={messagePic} />
                        <Card.Body>
                            <Card.Title>Ty-Message</Card.Title>
                            <Card.Text>
                                Instant messaging app built with React, Node, Express, and socket.io.
                                MaterialUI is also used for the styling.
                                </Card.Text>
                                <hr />
                            <Links
                                github="https://github.com/tylerjvalley/ty-message-react"
                                project="https://ty-message-react.herokuapp.com/" /> 
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={reactPic} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <hr />
                            <Links />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}


export default react;