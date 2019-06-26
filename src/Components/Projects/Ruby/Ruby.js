import React from 'react';
import Card from 'react-bootstrap/Card';
import Links from '../Links/Links';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import financePic from '../../../Images/finance.png';
import alphaPic from '../../../Images/alpha.png'
import tymessPic from '../../../Images/ty-message.png'
import rubyPic from '../../../Images/rais.png'


const ruby = () => {

    return (
        <Container>
            <Row className="row">
                <Col>
                    <Card
                        style={{
                            width: '18rem',
                            height: '20rem',
                            backgroundImage: "url(" + rubyPic + ")",
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'

                        }}
                    >
                        
                        <Card.Body>
                            <div className="display">
                                <Card.Title>Ty-Message</Card.Title>
                                <Links
                                    github="https://github.com/tylerjvalley/ty_message"
                                    project="https://ty-message.herokuapp.com/" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col>
                    <Card
                        style={{
                            width: '18rem',
                            height: '20rem',
                            backgroundImage: "url(" + rubyPic + ")",
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'

                        }}
                    >
                        <Card.Body>
                            <div className="display">
                                <Card.Title>Finance Tracker</Card.Title>
                                
                                <Links
                                    github="https://github.com/tylerjvalley/finance_tracker"
                                    project="https://valley-finance-tracker.herokuapp.com/" />
                                </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card
                        style={{
                            width: '18rem',
                            height: '20rem',
                            backgroundImage: "url(" + rubyPic + ")",
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'

                        }}
                    >
                        <Card.Body>
                            <div className="display">
                                <Card.Title>Finance Tracker</Card.Title>

                                <Links
                                    github="https://github.com/tylerjvalley/finance_tracker"
                                    project="https://valley-finance-tracker.herokuapp.com/" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card
                        style={{
                            width: '18rem',
                            height: '20rem',
                            backgroundImage: "url(" + rubyPic + ")",
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'

                        }}
                    >

                        <Card.Body>
                            <div className="display">
                                <Card.Title>Alpha Blog</Card.Title>
                                <Links
                                    github="https://github.com/tylerjvalley/alpha-blog"
                                    project="https://alpha-blog-tylerjv.herokuapp.com/" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </Container>
    );
}


export default ruby;