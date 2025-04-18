import React from 'react';
import '../styles/main.css'; 

export default function Services() {
  return (
    <section className="services" id="services">
      <h2 className="heading">
        Our <span>Services</span>
      </h2>

      <div className="services-container">
        <div className="services-box">
          <i className="bx bx-code-alt"></i>
          <h3>Web Development</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Architecto quis porro tempore tenetur quibusdam ducimus corrupti sint molestias dolor eaque.
          </p>
          <a href="https://www.w3schools.com/whatis/" className="btn" target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>

        <div className="services-box">
          <i className="bx bxs-paint"></i>
          <h3>Graphic Designer</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Architecto quis porro tempore tenetur quibusdam ducimus corrupti sint molestias dolor eaque.
          </p>
          <a href="https://en.wikipedia.org/wiki/Graphic_design" className="btn" target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>

        <div className="services-box">
          <i className="bx bxl-kickstarter"></i>
          <h3>Advertisements</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Architecto quis porro tempore tenetur quibusdam ducimus corrupti sint molestias dolor eaque.
          </p>
          <a href="https://www.adjust.com/glossary/advertisement/" className="btn" target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}