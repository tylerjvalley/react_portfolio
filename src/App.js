import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Nav from './Components/Navigation/Navigation';
import './App.css';


class App extends Component {

 

  
  render() {

    return (


      <BrowserRouter basename="/tyler-valley">
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route path="/" exact component={Home} />
          <Route path="/projects/" component={Projects} />
          <Route path="/contact/" component={Contact} />
          <Route path="/about/" exact component={About} />
        </AnimatedSwitch>
        
        
        <Nav />
      </BrowserRouter>

    );
  }
}

export default App;
