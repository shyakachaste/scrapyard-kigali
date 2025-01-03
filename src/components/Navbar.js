import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="navbar-action">
        <a href="https://lu.ma/vxqvrsh9" className="signup-btn" target="_blank" rel="noreferrer">
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
