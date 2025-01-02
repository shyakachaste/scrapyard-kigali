import React from 'react';
import { ReactComponent as Logo } from '../assets/wordmark.svg';
import '../styles/Herosection.css';

const Herosection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <Logo className="hero-logo" />
        <div className="hero-text">
          <p className="hero-subtitle">Build stupid s#!t, get stupid prizes.</p>
          <p className="hero-details">Join us on March 15th in Kigali.</p>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
