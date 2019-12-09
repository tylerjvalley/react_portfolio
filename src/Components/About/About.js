import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import JSImage from '../../Images/javascript.png';
import ReactImage from '../../Images/reactjs.png';
import NodeImage from '../../Images/nodejs.png';
import './About.css';

const aboutMe = () => (
    <div className="about-page">
        <Jumbotron className="about-me-jumbotron" fluid>
            <Container>
                <h1>About Me</h1>
            </Container>
        </Jumbotron>

        <div className="middle">
            <div className="frontend-fullstack">
                <h6>Front End focused with experience in full stack development</h6>
            </div>

            <div className="icons">
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src={JSImage} roundedCircle />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={ReactImage} roundedCircle />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={NodeImage} roundedCircle />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

        <div className="info">
            <div>
                <h4>Motivated to produce results</h4>
                <p>I always make sure that the projects I do, and the results that I have are exactly what I need them to be.  I give 100% to my assignments, and I love chipping away at problems until I end up with a great solution.</p>
            </div>
            <div>
                <h4>Focus on JavaScript</h4>
                <p>Over the past 4 years I've been working with JavaScript to create beautiful websites and projects for myself and for clients.  I love working with React and Node.js and I love learning as much as I can about it.</p>
            </div>
            <div>
                <h4>Easy to work with</h4>
                <p>I love working with people and collaborating with other developers to come up with interesing ideas.  I also make sure to have frequent contact with clients in order to provide them with updates and to give them the results they expect.</p>
            </div>
            <div>
                <h4>Always learning</h4>
                <p>I am very passionate about what I do, and I am always learning new and better ways to build applications.  I love to learn from other developers and I am constantly making myself better to produce the best results.</p>
            </div>
        </div>

        <div className="skill-cards">
            <Card style={{ width: '18rem' }}>
                <i style={{ fontSize: '40px', textAlign: 'center', padding: '5%', color: 'rgba(10, 5, 92, 0.781)'}}class="fas fa-desktop"></i>
                <Card.Body>
                    <Card.Title>Front End</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item>HTML</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                        <ListGroup.Item>Bootstrap</ListGroup.Item>
                        <ListGroup.Item>Material UI</ListGroup.Item>
                        <ListGroup.Item>JavaScript</ListGroup.Item>
                        <ListGroup.Item>ReactJS | Redux</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <i style={{ fontSize: '40px', textAlign: 'center', padding: '5%', color: 'rgba(10, 5, 92, 0.781)'}} class="fas fa-server"></i>
                <Card.Body>
                    <Card.Title>BackEnd</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Node.JS</ListGroup.Item>
                        <ListGroup.Item>Express</ListGroup.Item>
                        <ListGroup.Item>MongoDB</ListGroup.Item>
                        <ListGroup.Item>PostgreSQL</ListGroup.Item>
                        <ListGroup.Item>Ruby</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>

       
    </div>
);



export default aboutMe;