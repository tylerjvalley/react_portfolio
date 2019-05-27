import React, { Component } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Projects.css';
import Ruby from './Ruby/Ruby';
import ReactProjects from './React/React';
import JS from './JS/Js';

class Projects extends Component {

    state = {
        activeTab: 0,
    }

    render() {
        return (
            <div className="projects-page">
                <Navigation />
                <div className="category-tabs">
                    <Tabs defaultActiveKey="react" id="uncontrolled-tab-example">
                        <Tab eventKey="react" title="ReactJs">
                            <ReactProjects />
                        </Tab>
                        <Tab eventKey="ruby" title="Ruby">
                            <Ruby />
                        </Tab>
                        <Tab eventKey="js" title="Vanilla JS">
                            <JS />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default Projects;