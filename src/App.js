// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';


import './App.css';

const Home = () => (
  <div>
    <div id='mains'>
      <div>
        <h1 id='wels'>Welcome to SirP-rezDev Navigation Bar</h1>
        <p>This is my Sample Landing pages.</p>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
