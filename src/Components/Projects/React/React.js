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
                    <Card 
                    style={{ 
                    width: '18rem', 
                    height: '20rem',
                    backgroundImage: "url(" + reactPic + ")", 
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                
                }}
                    >
                        <Card.Body>
                            <div className="display">
                                <Card.Title>Card Title</Card.Title>
                                <Links />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card
                        style={{
                            width: '18rem',
                            height: '20rem',
                            backgroundImage: "url(" + reactPic + ")",
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'

                        }}
                    >
                      
                        <Card.Body>
                            <div className="display">
                                <Card.Title>Card Title</Card.Title>
                                <Links
                                    github="https://github.com/tylerjvalley/ty-message-react"
                                    project="https://ty-message-react.herokuapp.com/" /> 
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card
                        style={{
                            width: '18rem',
                            height: '20rem',
                            backgroundImage: "url(" + reactPic + ")",
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'

                        }}
                    >
                        <Card.Body>
                            <div className="display">
                                <Card.Title>Card Title</Card.Title>
                                
                                <Links />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card
                        style={{
                            width: '18rem',
                            height: '20rem',
                            backgroundImage: "url(" + reactPic + ")",
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'

                        }}
                    >
                        <Card.Body>
                            <div className="display">
                                <Card.Title>Card Title</Card.Title>

                                <Links />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}


export default react;