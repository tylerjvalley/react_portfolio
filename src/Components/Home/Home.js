import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Resume from '../Modal/Resume';
import './Home.css';



const home = () => {
    return (
        <>
        
        <Jumbotron className="jumbotron">
            <div className="logo">
                <h1>TV</h1>
            </div>
                    
            <div className="text">
                <h1>Tyler J Valley</h1>
                <h3>Front-End Developer</h3>
                <hr/>

                
        
                <div className="buttons">
                    <Link to="/projects/"><Button className="main-button" variant="outline-light" size="lg">See Projects</Button></Link>
                    <Resume />
                </div>

                <div className="social-links">
                    <a href="http://facebook.com/tyler.valley.79" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-facebook" aria-hidden="true" />
                    </a>
                    <a href="https://github.com/tylerjvalley" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-github" aria-hidden="true" />
                    </a>
                    <a href="https://www.linkedin.com/in/tyler-valley-469b58128/" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-linkedin-in" aria-hidden="true" />
                    </a>
                </div>
                
            </div>

            

           
           
             
           
        </Jumbotron>
        </>
    );
}

export default home;