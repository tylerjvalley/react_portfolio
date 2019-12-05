import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import tipcalcPic from '../../../Images/tipcalc.png';
import pigPic from '../../../Images/pigPic.png';
import budgetPic from '../../../Images/budget.png';

const js = () => {

    return (
        <Container className="cards-container">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={tipcalcPic} />
                <Card.Body>
                    <Card.Title>Tip Calculator</Card.Title>
                    <Button variant="info">View</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pigPic} />
                <Card.Body>
                    <Card.Title>Pig Game</Card.Title>
                    <Button variant="info">View</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={budgetPic} />
                <Card.Body>
                    <Card.Title>Budget Calculator</Card.Title>
                    <Button variant="info">View</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}


export default js;