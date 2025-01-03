import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Herosection from './components/Herosection';
import About from './components/About';
import TeamSection from './components/TeamSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <About />
      <TeamSection />
    </div>
  );
}

export default App;
