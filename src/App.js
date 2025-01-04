import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Herosection from './components/Herosection';
import About from './components/About';
import TeamSection from './components/TeamSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrapyardSchedule from './components/ScrapyardSchedule';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <About />
      <ScrapyardSchedule />
      <TeamSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
