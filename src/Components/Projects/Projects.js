import React, { Component } from 'react';
import './Projects.css';
import Ruby from './Ruby/Ruby';
import ReactProjects from './React/React';
import JS from './JS/Js';

class Projects extends Component {
 
    state = {  
        projectType: 'react',
    }

    selectProjects = (type) => {
        if (type === 'react') {
            this.setState({ projectType: 'react' });
        } else if (type === 'ruby') {
            this.setState({ projectType: 'ruby' });
        } else if (type === 'js') {
            this.setState({ projectType: 'js' });
        }
    }


    render() {
        let projects, type;

        const { projectType } = this.state

        if (projectType === 'react') {
            projects = <ReactProjects />;
            type = (<h3>React</h3>);
        } else if (projectType === 'ruby') {
            projects = <Ruby />
            type = (<h3>Ruby</h3>);
        } else if (projectType === 'js') {
            projects = <JS />
            type = (<h3>JavaScript</h3>);
        }

        return (
            <div className="projects-page">
                
                <div className="category-tabs">
                    <h5 onClick={() => this.selectProjects('react')}>React</h5>
                    <h5 onClick={() => this.selectProjects('ruby')}>Ruby</h5>
                    <h5 onClick={() => this.selectProjects('js')}>Vanilla Js</h5>
                </div>

                <div className="projects-type">
                    {type}
                </div>

                
                {projects}
               
                
            </div>
        )
    }
}

export default Projects;