// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>🍋‍🟩 Welcome to My Portfolio 🍋‍🟩</h1>
      <p>
        🍓Hi! I'm <Link to="/contact" className="name-link">Noelle Fontanar</Link>, a web developer.🍓
      </p>
      <p>🍓I'll be happy to work with you.🍓</p>
    </div>
  );
};

export default Home;