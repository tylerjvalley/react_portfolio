import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Modal from '../../Modal/Modal';
import financePic from '../../../Images/finance.png';
import tymessPic from '../../../Images/ty-message.png'


const ruby = () => {

    return (
        <Container className="cards-container">
            <Card style={{ width: '18rem' }}>
                <Card.Img className="card-image"  variant="top" src={financePic} />
                <Card.Body className="project-card-body">
                    <Card.Title>Finance Tracker</Card.Title>
                    <Modal
                        id="5"
                        name="Finance Tracker"
                        description="This is a simple project I built with ruby on rails through a tutorial. Through building this I learned how to use Models and routes, and how to link the back end and databases with the front end of an application. This keeps track of stocks and lets the user create profiles to save certain stocks to their portfolio."
                    />
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img className="card-image"  variant="top" src={tymessPic} />
                <Card.Body className="project-card-body">
                    <Card.Title>Ty Message</Card.Title>
                    <Modal
                        id="6"
                        name="Ty Message"
                        description="This is an instant messaging app built with ruby on rails."
                    />
                </Card.Body>
            </Card>
        </Container>
    );
}


export default ruby;