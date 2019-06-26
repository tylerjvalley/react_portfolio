import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Links from '../Links/Links';
import tipcalcPic from '../../../Images/tipcalc.png';
import pigPic from '../../../Images/pigPic.png';
import budgetPic from '../../../Images/budget.png';
import jsPic from '../../../Images/javascript.png';

const js = () => {

    return (
        <Container>
            <Row className="row">
                <Col>
                    <Card
                        style={{
                            width: '18rem',
                            height: '20rem',
                            backgroundImage: "url(" + jsPic + ")",
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'

                        }}
                    >
    
                        <Card.Body>
                            <div className="display">
                                <Card.Title>Budget App</Card.Title>
                                <Links
                                    github="https://github.com/tylerjvalley/budget-app" 
                                    project="https://codepen.io/tylerjvalley/full/mYzrjo"/>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card
                        style={{
                            width: '18rem',
                            height: '20rem',
                            backgroundImage: "url(" + jsPic + ")",
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'

                        }}
                    >
                       
                        <Card.Body> 
                            <div className="display">
                                <Card.Title>PIG Game</Card.Title>
                                <Links
                                    github="https://github.com/tylerjvalley/pig-game"
                                    project="https://codepen.io/tylerjvalley/full/pmxEpy" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card
                        style={{
                            width: '18rem',
                            height: '20rem',
                            backgroundImage: "url(" + jsPic + ")",
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'

                        }}
                    >

                        <Card.Body>
                            <div className="display">
                                <Card.Title>Tip Calculator</Card.Title>
                                <Links
                                    github="https://github.com/tylerjvalley/tip-calculatorjs"
                                    project="https://codepen.io/tylerjvalley/full/bymwmd" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card
                        style={{
                            width: '18rem',
                            height: '20rem',
                            backgroundImage: "url(" + jsPic + ")",
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'

                        }}
                    >

                        <Card.Body>
                            <div className="display">
                                <Card.Title>Tip Calculator</Card.Title>
                                <Links
                                    github="https://github.com/tylerjvalley/tip-calculatorjs"
                                    project="https://codepen.io/tylerjvalley/full/bymwmd" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}


export default js;