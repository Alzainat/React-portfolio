import React from 'react';
import '../styles/main.css'; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>&copy; 2025 | All Rights Reserved</p>
      </div>

      <div className="footer-iconTop">
        <a href="#home">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </footer>
  );
}