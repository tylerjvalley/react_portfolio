import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Modal from '../../Modal/Modal';
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
                    <Modal
                        id="9"
                        name="Tip Calculator"
                        description="Basic tip calculator I built to get the hang of Javascript."
                    />
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pigPic} />
                <Card.Body>
                    <Card.Title>Pig Game</Card.Title>
                    <Modal
                        id="8"
                        name="PIG Game"
                        description="Simple game I built with Javascript. This game requires two players. The player rolls the dice to accumulate points. The first player to get to 100, or whichever score is specified, wins."
                    />
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={budgetPic} />
                <Card.Body>
                    <Card.Title>Budget Calculator</Card.Title>
                    <Modal
                        id="7"
                        name="Budget Calculator"
                        description="This is a project built with vanilla javascript through a tutorial. This was the first project I built and it helped me learn a lot about how JavaScript and programming works.  It is a basic calculator that automatically updates your budget based on income and expenses that you enter."
                    />
                </Card.Body>
            </Card>
        </Container>
    );
}


export default js;