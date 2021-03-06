import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const links = (props) => (
    <Container>
        <div className="project-links">
          
            <a href={props.project} rel="noopener noreferrer" target="_blank">
                <Button variant="secondary">Project</Button>
            </a>
        
            <a href={props.code} rel="noopener noreferrer" target="_blank">
                <Button variant="secondary">Github</Button>
            </a>
        
        </div>
    </Container>
);

export default links;