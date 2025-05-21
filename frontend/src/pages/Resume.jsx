// import { useEffect, useRef } from 'react';
// import '../styles/pages/Resume.css';

// const Resume = () => {
//   const titleRef = useRef(null);

//   useEffect(() => {
//     if (titleRef.current) {
//       titleRef.current.classList.add('fade-in');
//     }
//   }, []);

//   return (
//     <div className="resume">
//       <div className="resume-header">
//         <h1 ref={titleRef}>Resume</h1>
//         <p className="subtitle">My professional journey</p>
//       </div>

//       <div className="resume-content">
//         <div className="resume-section">
//           <h2>Education</h2>
//           <div className="timeline">
//             <div className="timeline-item">
//               <div className="timeline-content">
//                 <h3>Bachelor of Science in Computer Science</h3>
//                 <p className="institution">University Name</p>
//                 <p className="date">2016 - 2020</p>
//                 <p>
//                   Graduated with honors. Specialized in Software Engineering and Web Development.
//                   Participated in various hackathons and coding competitions.
//                 </p>
//               </div>
//             </div>
//             <div className="timeline-item">
//               <div className="timeline-content">
//                 <h3>Web Development Bootcamp</h3>
//                 <p className="institution">Coding Academy</p>
//                 <p className="date">2020</p>
//                 <p>
//                   Intensive 12-week program focusing on modern web technologies and best practices.
//                   Built multiple full-stack applications using React, Node.js, and MongoDB.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="resume-section">
//           <h2>Work Experience</h2>
//           <div className="timeline">
//             <div className="timeline-item">
//               <div className="timeline-content">
//                 <h3>Senior Full Stack Developer</h3>
//                 <p className="company">Tech Company</p>
//                 <p className="date">2022 - Present</p>
//                 <ul>
//                   <li>Lead development of enterprise applications using React and Node.js</li>
//                   <li>Implement best practices and mentor junior developers</li>
//                   <li>Optimize application performance and user experience</li>
//                   <li>Collaborate with cross-functional teams on project planning</li>
//                 </ul>
//               </div>
//             </div>
//             <div className="timeline-item">
//               <div className="timeline-content">
//                 <h3>Full Stack Developer</h3>
//                 <p className="company">Startup Inc.</p>
//                 <p className="date">2020 - 2022</p>
//                 <ul>
//                   <li>Developed and maintained web applications using modern JavaScript frameworks</li>
//                   <li>Implemented responsive designs and optimized for mobile devices</li>
//                   <li>Integrated third-party APIs and services</li>
//                   <li>Participated in code reviews and agile development processes</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="resume-section">
//           <h2>Skills</h2>
//           <div className="skills-grid">
//             <div className="skill-category">
//               <h3>Frontend</h3>
//               <ul>
//                 <li>React.js</li>
//                 <li>HTML5 & CSS3</li>
//                 <li>JavaScript (ES6+)</li>
//                 <li>Responsive Design</li>
//                 <li>Redux</li>
//               </ul>
//             </div>
//             <div className="skill-category">
//               <h3>Backend</h3>
//               <ul>
//                 <li>Node.js</li>
//                 <li>Express.js</li>
//                 <li>MongoDB</li>
//                 <li>RESTful APIs</li>
//                 <li>GraphQL</li>
//               </ul>
//             </div>
//             <div className="skill-category">
//               <h3>Tools & Others</h3>
//               <ul>
//                 <li>Git & GitHub</li>
//                 <li>Docker</li>
//                 <li>AWS</li>
//                 <li>CI/CD</li>
//                 <li>Agile Methodologies</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="resume-section">
//           <h2>Certifications</h2>
//           <div className="certifications-grid">
//             <div className="certification-card">
//               <h3>AWS Certified Developer</h3>
//               <p>Amazon Web Services</p>
//               <p className="date">2023</p>
//             </div>
//             <div className="certification-card">
//               <h3>MongoDB Certified Developer</h3>
//               <p>MongoDB University</p>
//               <p className="date">2022</p>
//             </div>
//             <div className="certification-card">
//               <h3>React Advanced Concepts</h3>
//               <p>Udemy</p>
//               <p className="date">2021</p>
//             </div>
//           </div>
//         </div>

//         <div className="download-section">
//           <a href="/resume.pdf" download className="download-button">
//             Download Full Resume
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Resume; 