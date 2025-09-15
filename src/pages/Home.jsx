import React from 'react';
import image from "../assets/s.jpg";
import insta from "../assets/icons/instagram.png";
import linke from "../assets/icons/linkedin.png";
import hacker from "../assets/icons/hackerRank.jpeg";
import git from "../assets/icons/github.jpg";
import { Link } from 'react-router-dom';

function Home() {
  const skills = [
    'Angular', 'React js', 'HTML5', 'CSS', 
    'Tailwind CSS', 'MySQL', 'Figma', 'Redux ToolKit', 'Material Lib', 'Git & Github',
    'Bit Buket', 'Jira' 
  ];

  return (
    <div className="home-container glass">
      {/* Image and Text Side by Side */}
      <div className="intro">
        <div className="image-container">
          <img src={image} alt="Raman Jangir" className="profile-image" />
        </div>
        <div className="text-content">
          <p>Hi, I'm <span className="name">Raman Jangir</span></p>
          <p className="role">Frontend Developer & UI/UX Designer</p>
          <p className="intro-text">
            I’m a <strong>Frontend Developer</strong> with <strong>1+ year of experience</strong>, 
            currently working at <strong>Keva</strong>. I’ve also completed a 
            <strong> 6-month internship</strong> at a startup, where I gained hands-on 
            experience in building real-world applications.  
            Along with coding, I’m passionate about <strong>UI/UX Design</strong>, 
            creating clean, user-friendly, and visually appealing interfaces.
          </p>
        </div>
      </div>

      <hr style={{backgroundColor:"#2e2f30ff", height:".5px"}} />
 {/* Experience Row */}
      <div className="skills-section">
        <p className="skills-title">Experience</p>
        <div className="skills-container">
          <Link to="/experience" style={{ textDecoration: 'none' }}>
            <div className="skill-box">
              Keva | 1 Year
            </div>
          </Link>
          <Link to="/experience" style={{ textDecoration: 'none' }}>
            <div className="skill-box">
              Modcub | 6 Months Internship
            </div>
          </Link>
        </div>
      </div>
      {/* Skills Section */}
      <div className="skills-section">
        <p className="skills-title">Skills</p>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-box">
              {skill}
            </div>
          ))}
        </div>
      </div>

      <hr style={{marginTop:"40px"}} />

     

      <hr style={{marginTop:"40px"}} />

      {/* Developed by Section */}
      <div className="footer-section">
        <p>Developed by <span className="name">Raman Jangir</span></p>
        <div className="social-links">
          <Link to="https://www.instagram.com/rj_3522/" target="_blank">
            <img src={insta} alt="Instagram" className="social-icon" />
          </Link>
          <Link to="https://www.linkedin.com/in/ramanjangir/" target="_blank">
            <img src={linke} alt="LinkedIn" className="social-icon" />
          </Link>
          <Link to="https://github.com/Ramanniku" target="_blank">
            <img src={git} alt="GitHub" className="social-icon" />
          </Link>
          <Link to="https://www.hackerrank.com/profile/ramanjangir6243" target="_blank">
            <img src={hacker} alt="HackerRank" className="social-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
