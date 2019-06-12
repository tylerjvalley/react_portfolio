import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Navigation.css';
const navigation = (props) => {
    return (
        <Navbar className="navbar">
            <Nav>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/projects/">Projects</Link>
                <Link className="link" to="/about/">About Me</Link>
                <Link className="link" to="/contact/">Contact</Link>
            </Nav>
             
        </Navbar>
             
    );
}

export default navigation;