// src/components/About.js
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about">
      <h2>🍓 About Me 🍓</h2>
      <p>🍋 Hello! I'm Noelle, a passionate web developer with a love for creating beautiful and functional websites. 🍋</p>
      <p>🍓 I specialize in front-end development, using technologies like React, HTML, CSS, and JavaScript. My main forte is on conceptualising UI design. 🍓</p>
      <p>🍋 When I'm not coding, you can find me dabbling in the arts, reading books, and even cooking!🍋</p>
      <p>🍓 I'm always eager to learn and grow, and I'm excited to collaborate on new projects! 🍓</p>
      
      <div className="navigation">
        <h3>Explore More:</h3>
        <Link to="/projects">
          <button className="nav-button">Projects</button>
        </Link>
        <Link to="/contacts">
          <button className="nav-button">Contacts</button>
        </Link>
      </div>
    </div>
  );
};

export default About;