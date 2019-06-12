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
                <h4>Work well with others</h4>
                <p>Throughout my life I have always learned to listen to and respect the opinions of co-workers. I collaborate with other people easily to produce the best possible result. I love meeting new people and learning from others as well.</p>
            </div>
            <div>
                <h4>Always learning new things</h4>
                <p>As a self taught programmer, I am always learning and improving my problem solving skills. I am constantly working to perfect my skills in javascript and React, as well as learning what I can through other frameworks and technologies to be a more well-rounded programmer.</p>
            </div>
            <div>
                <h4>Love what I do</h4>
                <p>Ever since I discovered programming and web development, I have always loved building interesting things.  3 years later, I still spend a lot of spare time working on fun personal projects.  I am proud of what I have accomplished so far, and I look forward to trying new things and working with new projects.</p>
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
                        <ListGroup.Item>Node</ListGroup.Item>
                        <ListGroup.Item>Express</ListGroup.Item>
                        <ListGroup.Item>MongoDB</ListGroup.Item>
                        <ListGroup.Item>PostgreSQL</ListGroup.Item>
                        <ListGroup.Item>MongoDB</ListGroup.Item>
                        <ListGroup.Item>Ruby</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>

       
    </div>
);



export default aboutMe;