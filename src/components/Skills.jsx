import React from 'react';
import '../styles/main.css'; 

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-img">
        <img src="../../public/images/kick.webp" alt="Skills" />
      </div>

      <div className="skills-content">
        <h2 className="heading">
          My <span>Skills</span>
        </h2>

        <h3>1) Full Stack Web Developer</h3>
        <p>
          Versatile tech virtuoso who seamlessly juggles both front-end and back-end development.<br />
          I craft dynamic, user-friendly web applications that not only look stunning but also function flawlessly.<br />
          From writing elegant HTML and CSS to diving into complex server-side code, I handle it all with finesse.
        </p>

        <h3>2) Fast Learner</h3>
        <p>
          I’m a powerhouse of adaptability and curiosity. My ability to quickly grasp new concepts and skill sets
          sets me apart in any field I venture into.
          Whether it’s mastering the latest coding language, picking up new streaming techniques,<br />
          or diving into an entirely new subject, I do it with remarkable speed and efficiency.
        </p>

        <a href="#" className="btn">Read More About Me</a>
      </div>
    </section>
  );
}