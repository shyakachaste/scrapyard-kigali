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
        Scrapyard Kigali is a dynamic hub where young creatives come together to transform discarded materials into innovative solutions. It’s a space dedicated to upcycling, problem-solving, and fostering creativity through hands-on experiences.
      </motion.p>
      <motion.p 
        className="about-paragraph"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        Join us in reimagining waste and shaping a sustainable future. Whether you’re an artist, inventor, or just curious, Scrapyard Kigali welcomes you to explore, learn, and build.
      </motion.p>
    </section>
  );
};

export default About;
