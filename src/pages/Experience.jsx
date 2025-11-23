import React from "react";

function Experience() {
  return (
    <div className="page-content">
      <h2 className=" glass skills-title">Experience</h2>
      
      <div className="experience-container">
        
        {/* Keva Experience */}
        <div className="project-card glass">
          <h3>Frontend Developer & Figma Web Designer</h3>
          <p><strong>Keva Company</strong> | 1 Year</p>
          <p>
            Worked as a Frontend Developer   and Figma Web Designer focusing on building responsive and interactive UI components. Utilized technologies like ReactJS, AngularJS, Redux Toolkit, Material UI, JavaScript, TypeScript, TailwindCSS, along with project management tools like Jira and Bitbucket.
          </p>
        </div>

        {/* Modcub Experience */}
        <div className="project-card glass">
          <h3>Web Developer</h3>
          <p><strong>Modcub Startup</strong> | Internship / Project Work</p>
          <p>
            Developed an e-commerce website from scratch including its overall design, layout, and functionality. Collaborated with the team to implement features that enhance user experience while ensuring responsiveness and performance.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Experience;
