import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';
const navigation = (props) => {
    return (
        <Navbar className="navbar">
            <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Projects</Nav.Link>
                <Nav.Link href="#pricing">Resume</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
             
        </Navbar>
             
    );
}

export default navigation;