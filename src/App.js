import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Herosection from './components/Herosection';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <About />
    </div>
  );
}

export default App;
