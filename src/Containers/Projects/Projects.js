import React, { Component } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Aux from '../../HOC/Aux';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Projects.css';

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
                            <h1>React Projects</h1>
                        </Tab>
                        <Tab eventKey="ruby" title="Ruby">
                            <h1>Ruby Projects</h1>
                        </Tab>
                        <Tab eventKey="js" title="Vanilla JS">
                            <h1>Javascript Projects</h1>
                        </Tab>
                    </Tabs>;
                </div>
            </div>
        )
    }
}

export default Projects;