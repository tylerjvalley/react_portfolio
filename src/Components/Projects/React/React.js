import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Modal from '../../Modal/Modal';
import AntiquesPic from '../../../Images/antiques.jpg';
import LawOfficePic from '../../../Images/lawoffice.jpg';
import BookFinderPic from '../../../Images/library.jpg';
import RedditPic from '../../../Images/franceisbacon.png';

const react = () => {

    return (
        <Container className="cards-container">
            <Card style={{ width: '18rem' }}>
                <Card.Img className="card-image" variant="top" src={RedditPic} />
                <Card.Body className="project-card-body">
                    <Card.Title>France is Bacon</Card.Title>
                    <Modal
                        id="4"
                        name="France is Bacon"
                        description="This is another personal project of mine.  It is an easy to use Reddit viewer for browsers.  The user can look up any subreddit and look through recent posts on that subreddit.  This project uses React and the Reddit API."
                    />
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img className="card-image" variant="top" src={BookFinderPic} />
                <Card.Body className="project-card-body">
                    <Card.Title>Book Finder</Card.Title>
                    <Modal
                        id="3"
                        name="Book Finder"
                        description="This is a personal project that I built for fun. It allows the user to look up any book, create accounts, and save books to their personal dashboard. Also lets the user keep track of which books they are currently reading or books they have finished. This project uses Node, React, Express, MongoDB, and the google books API"
                    />
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img className="card-image" variant="top" src={AntiquesPic} />
                <Card.Body className="project-card-body">
                    <Card.Title>A Southern Market</Card.Title>
                    <Modal
                      id="1"
                      name="A Southern Market"  
                      description="A Southern Market is an ecommerce store that specializes in products sold by local vendors in the southern United States. It has users, including the ability for administrators to add or delete items and vendors once logged in. This was built with React, Node, Express, and MongoDB. The github repository for this project is private since this was built for a client. However, code snippets can be sent upon request."
                    />
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img className="card-image"  variant="top" src={LawOfficePic} />
                <Card.Body className="project-card-body">
                    <Card.Title>Noojin&amp;Noojin Law firm Website</Card.Title>
                    <Modal
                        id="2"
                        name="Noojin&amp;Noojin Law firm"
                        description="This is website built for Noojin &amp; Noojin Law firm in Fairhope, Alabama.  This is mainly a React focused project but also uses Node.js for sending emails through the contact form.  This also features a news page where the client can post any updates about the firm for anybody to see.  This was built with React, Node, and Nodemailer for gmail. The github repository for this project is private since this was built for a client. However, code snippets can be sent upon request."
                    />
                </Card.Body>
            </Card>
        </Container>
    );
}


export default react;