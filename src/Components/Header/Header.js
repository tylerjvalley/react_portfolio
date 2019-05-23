import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import picture from '../../Images/avatar-pic.jpg'
import Navigation from '../Navigation/Navigation';
import './Header.css';



const header = () => {
    return (
        <Jumbotron className="jumbotron">
            <Navigation />
            <img src={picture} alt="avatar" className="avatar" />

            <div className="text">
                <h1>Tyler J Valley</h1>
                <h3>Front-End Developer</h3>
                <hr/>

                
                <p>HTML/CSS | ReactJs | Javascript | Ruby on Rails</p>

                <div className="social-links">
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-linkedin-in" aria-hidden="true" />
                    </a>
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-github" aria-hidden="true" />
                    </a>
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-facebook" aria-hidden="true" />
                    </a>
                </div>
            </div>

            

           
           
             
           
        </Jumbotron>
    );
}

export default header;