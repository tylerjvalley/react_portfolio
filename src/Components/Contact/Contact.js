import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import './Contact.css';

const contact = () => {
    return (
        <div className="body">
            <Container className="grid">
                <Row>
                    <Col>
                        <h2>Tyler Valley</h2>
                        
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Feel free to contact me through phone or email me at any time.</p>
                    </Col>

                    <Col>
                        <h2>Contact Me!</h2>
                        <hr />

                        <div className="contact">
                            <ListGroup>
                                <ListGroup.Item className="contact-list" style={{ fontSize: '25px', marginTop: '15px' }}>
                                    <i
                                        className="fa fa-phone-square"
                                        aria-hidden="true"
                                        style={{ marginRight: '10px', fontSize: '44px', marginTop: '20px', marginBottom: '20px' }} />
                                    (334) 805-7113
                                </ListGroup.Item>

                                <ListGroup.Item className="contact-list"style={{ fontSize: '25px' }}>
                                    <i
                                        className="fas fa-envelope"
                                        aria-hidden="true"
                                        style={{ marginRight: '10px', fontSize: '40px', marginTop: '20px', marginBottom: '20px' }} />
                                    tvalley93@gmail.com
                                </ListGroup.Item>

                                <ListGroup.Item className="contact-list" style={{ fontSize: '25px' }}>
                                    <i
                                        className="fab fa-skype"
                                        aria-hidden="true"
                                        style={{ marginRight: '10px', fontSize: '40px', marginTop: '20px', marginBottom: '20px' }} />
                                    tylerjvalley@live.com
                                </ListGroup.Item>

                            </ListGroup>;
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default contact;