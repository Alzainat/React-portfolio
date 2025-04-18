import React from 'react';
import '../styles/main.css'; 

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">
        Latest <span>Projects</span>
      </h2>

      <div className="projects-container">
        {/* Project 1 */}
        <div className="projects-box">
          <img src="images/kick.webp" alt="Project 1" />
          <div className="projects-layer">
            <h4>Coming Soon</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sed.</p>
            <a href="#"><i className="bx bx-link-external"></i></a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="projects-box">
          <img src="images/kick.webp" alt="Project 2" />
          <div className="projects-layer">
            <h4>Coming Soon</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sed.</p>
            <a href="#"><i className="bx bx-link-external"></i></a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="projects-box">
          <img src="images/kick.webp" alt="Project 3" />
          <div className="projects-layer">
            <h4>Coming Soon</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sed.</p>
            <a href="#"><i className="bx bx-link-external"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}