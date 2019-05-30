import React from 'react';
import Card from 'react-bootstrap/Card';
import Links from '../Links/Links';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import rubyPic from '../../../Images/rais.png';
import financePic from '../../../Images/finance.png';
import alphaPic from '../../../Images/alpha.png'
import tymessPic from '../../../Images/ty-message.png'


const ruby = () => {

    return (
        <Container>
            <Row className="row">
                <Col>
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={tymessPic} />
                        <Card.Body>
                            <Card.Title>Ty-Message</Card.Title>
                            <Card.Text>
                                Simple instant messaging app where the user can create an account and 
                                send messages instantly to other users
                            </Card.Text>
                            <hr />
                            <Links
                                github="https://github.com/tylerjvalley/ty_message"
                                project="https://ty-message.herokuapp.com/" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={financePic} />
                        <Card.Body>
                            <Card.Title>Finance Tracker</Card.Title>
                            <Card.Text>
                                Ruby on Rails app that tracks stocks and lets the user store certain stocks in
                                the portfolio to keep track of. 
                            </Card.Text>
                            <hr />
                            <Links
                                github="https://github.com/tylerjvalley/finance_tracker"
                                project="https://valley-finance-tracker.herokuapp.com/" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={alphaPic} />
                        <Card.Body>
                            <Card.Title>Alpha Blog</Card.Title>
                            <Card.Text>
                                Simple Ruby on rails CRUD app where the user can sign up, create posts, and comment
                                on other user's posts
                            </Card.Text>
                            <hr />
                            <Links
                                github="https://github.com/tylerjvalley/alpha-blog"
                                project="https://alpha-blog-tylerjv.herokuapp.com/" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </Container>
    );
}


export default ruby;