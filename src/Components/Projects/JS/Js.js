import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Links from '../Links/Links';
import tipcalcPic from '../../../Images/tipcalc.png';
import pigPic from '../../../Images/pigPic.png';
import budgetPic from '../../../Images/budget.png';

const js = () => {

    return (
        <Container>
            <Row className="row">
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={budgetPic} />
                        <Card.Body>
                            <Card.Title>Budget App</Card.Title>
                            <Card.Text>
                                This app allows the user to enter incomes and expenses.  It stores the values on the UI and 
                                calculates a budget based on the values that the user enters.  
                            </Card.Text>
                            <hr />
                            <Links
                                github="https://github.com/tylerjvalley/budget-app" 
                                project="https://codepen.io/tylerjvalley/full/mYzrjo"/>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={pigPic} />
                        <Card.Body> 
                            <Card.Title>PIG Game</Card.Title>
                            <Card.Text>
                                This is a two player PIG game that I built while learning how to effectively create
                                apps with functional programming. The rules 
                                are posted on the README in the git repository hosted on github. (Link Below)
                                </Card.Text>
                            <hr />
                            <Links
                                github="https://github.com/tylerjvalley/pig-game"
                                project="https://codepen.io/tylerjvalley/full/pmxEpy" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tipcalcPic} />
                        <Card.Body>
                            <Card.Title>Tip Calculator</Card.Title>
                            <Card.Text>
                                This is a very basic tip calculator.  This takes into account the number of people,
                                amount of the bill, and quality of service. Then it calulates a suggested tip based on 
                                what the user enters. 
                                </Card.Text>
                            <hr />
                            <Links
                                github="https://github.com/tylerjvalley/tip-calculatorjs"
                                project="https://codepen.io/tylerjvalley/full/bymwmd" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}


export default js;