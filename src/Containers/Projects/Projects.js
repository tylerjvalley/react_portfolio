import React, { Component } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Aux from '../../HOC/Aux';
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
                    <h1>Test</h1>
                </div>
            </div>
        )
    }
}

export default Projects;