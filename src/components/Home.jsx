import React from 'react';
import '../styles/main.css'; 

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's me</h3>
        <h1>Yousef Alzainat</h1>
        <h3>
          And I'm a <span className="multiple-text"></span>
        </h3>
        <p></p>

        <div className="social-media">
          <a href="https://github.com/Alzainat" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/yousef-alzainat-286989345/" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://x.com/yousefAlzainat9" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <a
          href="cv/Yousef Abu_Alzainat - Full Stack Developer.pdf"
          download="Yousef Abu_Alzainat - Full Stack Developer"
          className="btn"
        >
          Download CV
        </a>
      </div>

      <div className="home-img">
        <img src="public/images/yousef.jpg" alt="Yousef Alzainat" />
      </div>
    </section>
  );
}