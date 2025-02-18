// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <button className="nav-button">🏡 Home 🏡</button>
      </Link>
      <Link to="/projects">
        <button className="nav-button">🍽 Projects 🍽</button>
      </Link>
      <Link to="/about">
        <button className="nav-button">📒 About 📒</button>
      </Link>
      <Link to="/contact">
        <button className="nav-button">☎️ Contact ☎️</button>
      </Link>
      <button onClick={toggleTheme} className="theme-toggle">
        {isDarkMode ? '🌞' : '🌙'}
      </button>
    </nav>
  );
};

export default Navbar;