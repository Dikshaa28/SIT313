import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">DEV@Deakin</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#posts">Posts</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
