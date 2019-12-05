import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import AntiquesPic from '../../../Images/antiques.jpg';
import LawOfficePic from '../../../Images/lawoffice.jpg';
import BookFinderPic from '../../../Images/library.jpg';
import RedditPic from '../../../Images/franceisbacon.png';

const react = () => {

    return (
        <Container className="cards-container">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={AntiquesPic} />
                <Card.Body>
                    <Card.Title>A Southern Market</Card.Title>
                    <Button variant="info">View</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={LawOfficePic} />
                <Card.Body>
                    <Card.Title>Noojin&amp;Noojin Law firm Website</Card.Title>
                    <Button variant="info">View</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={BookFinderPic} />
                <Card.Body>
                    <Card.Title>Book Finder</Card.Title>
                    <Button variant="info">View</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={RedditPic} />
                <Card.Body>
                    <Card.Title>France is Bacon</Card.Title>
                    <Button variant="info">View</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}


export default react;