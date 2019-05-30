import React from 'react';
import Card from 'react-bootstrap/Card';
import Links from '../Links/Links';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import reactPic from '../../../Images/reactjs.png'


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