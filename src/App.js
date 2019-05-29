import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';
import ResumePDF from './Components/Resume/ResumePDF';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './Components/Navigation/Navigation';

function App() {
  return (


    <BrowserRouter>
      
      <Route path="/" exact component={Home} />
      <Route path="/projects/" component={Projects} />
      <Route path="/contact/" component={Contact} />
      <Route path="/resume/" exact component={Resume} />
      <Route path="/full-resume" component={ResumePDF} />
      <Nav />
    </BrowserRouter>

  );
}

export default App;
