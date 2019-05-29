import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const experience = () => (
  <Container>
        <h3>Developer Experience</h3>
        <hr style={{ backgroundColor: 'white' }} />

      <Row>
          <Col><h4>FREELANCE WEB DEVELOPER 2016 - PRESENT</h4></Col>
          <Col>
            <ul>
              <li>Developed and maintained Ruby on Rails applications for many different clients.</li>
              <li>Worked with Wordpress and other CMS applications to build websites for customers.</li>
              <li>Planned and designed web applications, worked with CSS frameworks such as bootstrap and Materialize for designs.</li>
              <li>Deployed web applications through heroku</li>
             </ul>
          </Col>
      </Row>
  </Container>  
);


export default experience;

