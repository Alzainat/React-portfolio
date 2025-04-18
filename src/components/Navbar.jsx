import React from 'react';
import '../styles/main.css';


export default function Navbar() {
  return (
    <header className="header">
      <a href="#" className="logo">Portfolio</a>

      <i className='bx bx-menu' id="menu-icon"></i>

      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#skills">Skills</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}