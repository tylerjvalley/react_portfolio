import React from 'react';
import './App.css';
import Home from './Containers/Home/Home';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;