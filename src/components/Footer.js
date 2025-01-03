import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>
      Developed by <a href="https://hackclub.com/" target="_blank"
          rel="noopener noreferrer" className="github-link"> Hack Club</a> with contributions from ♡ {' '}
        <a
          href="https://github.com/shyakachaste"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          shyakachaste
        </a>
      </p>
    </footer>
  );
};

export default Footer;