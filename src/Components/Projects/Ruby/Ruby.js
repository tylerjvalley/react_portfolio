import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import financePic from '../../../Images/finance.png';
import alphaPic from '../../../Images/alpha.png'
import tymessPic from '../../../Images/ty-message.png'


const ruby = () => {

    return (
        <Container className="cards-container">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={financePic} />
                <Card.Body>
                    <Card.Title>Finance Tracker</Card.Title>
                    <Button variant="info">View</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={tymessPic} />
                <Card.Body>
                    <Card.Title>Ty Message</Card.Title>
                    <Button variant="info">View</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={alphaPic} />
                <Card.Body>
                    <Card.Title>Alpha Blog</Card.Title>
                    <Button variant="info">View</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}


export default ruby;