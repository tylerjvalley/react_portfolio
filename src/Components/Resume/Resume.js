import React from 'react';
import './Resume.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Education from './Education';
import Qualifications from './Qualifications';
import Experience from './Experience';
import OtherExperience from './OtherExp';
import References from './References';
import image from '../../Images/tyler.png';

const resume = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="resume-left">
                        <div style={{textAlign: 'center'}}>
                            <img
                            className="resume-image"
                            src={image}
                            alt="avatar"
                            style={{height: '200px'}} />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Tyler Valley</h2>
                        <h4 style={{color: 'grey'}}>Front End Developer</h4>

                        <div className="resume-link">
                            <h4>See full Resume here -> </h4>
                            <a href="/full-resume/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-file" aria-hidden="true" />
                            </a>
                        </div>
                        
                        <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
                        <p>My name is Tyler Valley and I am looking for an opportunity to work as a Front End or Full Stack Web Developer for an organization. I am very passionate about software development and would love to work for a company with people who share the same passion. </p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
                        <h5>Address</h5>
                        <p>100 Sandy Springs Rd. Dothan, AL 36303</p>
                        <h5>Phone</h5>
                        <p>(334) 479-3482</p>
                        <h5>Email</h5>
                        <p>tvalley93@gmail.com</p>
                        <h5>Web</h5>
                        <p>tyler-valley.heroku-app.com</p>
                    </Col>

                    <Col className="resume-right">

                        <Qualifications />

                        <Experience />

                        <OtherExperience />

                        <Education
                            startYear="2015"
                            endYear="2017"
                            school="Wallace Community College"
                            schoolDescription="2 year Computer Information Science Program"
                            highSchool="Northview High School"
                            highSchoolDescription="Honors Diploma"
                            highscStart="2009"
                            highscEnd="2012" />

                            <References 
                                name1="Jorge Reyes"
                                number1="786-717-2112"
                                name2="Quinn DiBacco"
                                number2="850-258-9742 "
                                name3="Hunter Adams"
                                number3="334-435-9221"
                                
                            />
                    </Col>
                </Row>

                
            </Container>
        </div>
    );
}

export default resume; 