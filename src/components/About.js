import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';
import scrapyardDecor from '../assets/favicon.png';

const About = () => {
  return (
    <section className="about-page" id="about">
      <motion.div 
        className="about-decor"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.img 
          src={scrapyardDecor}
          alt="Scrapyard Decor"
          className="decor-image"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      <motion.h1 
        className="about-title"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Scrapyard Kigali
      </motion.h1>
      
      <motion.p 
        className="about-paragraph"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        Scrapyard is a global hackathon running in 100+ cities worldwide on March 15, organized by high schoolers with a “scrappy” theme of stupid inventions.
      </motion.p>
      
      <motion.p 
        className="about-paragraph"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        Scrapyard Kigali is the Kigali edition, where local high schoolers join the global movement to build creative solutions and have fun! Powered by Hack Club, a nonprofit supporting 48,000+ high school makers, it’s all about thinking outside the box and making something awesome!
      </motion.p>
    </section>
  );
};

export default About;
