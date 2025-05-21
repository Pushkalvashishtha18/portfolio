import { FaCode, FaServer, FaTools, FaDatabase } from 'react-icons/fa';
import './About.css';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <FaCode />,
      items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap']
    },
    {
      category: 'Backend',
      icon: <FaServer />,
      items: ['Node.js', 'Express', 'C++', 'Python', 'REST APIs']
    },
    {
      category: 'Tools',
      icon: <FaTools />,
      items: ['Git', 'VS Code', 'Postman', 'Figma', 'Cursor']
    },
    {
      category: 'Database',
      icon: <FaDatabase />,
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase']
    }
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        <section className="about-section">
          <h1 className="section-title">About Me</h1>
          <div className="about-content">
            <div className="about-text">
              <p>
              I’m a passionate full-stack developer with a curiosity-driven mindset and a strong grasp of both frontend and backend technologies. As a final-year B.Tech student specializing in AI & ML, I enjoy crafting solutions that are not only functional but also provide intuitive user experiences. From building dynamic MERN stack applications to integrating AI features like PDF summarization, translation, and chatbots, I love bringing ideas to life through code.
              </p>
              <p>
              My journey began with a deep interest in how things work on the internet, which led me to explore frameworks, APIs, and full-stack architectures. I’ve participated in multiple 36-hour hackathons, built culture-focused projects like an AI-driven heritage app, and developed LegalAI to assist in the legal domain. I’m committed to continuous learning, staying up-to-date with industry trends, and using technology to solve real-world problems meaningfully.
              </p>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <h2 className="section-subtitle">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skillGroup.icon}</div>
                <h3>{skillGroup.category}</h3>
                <ul>
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="experience-section">
          <h2 className="section-subtitle">Experience & Achievements</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Hackathon Participant</h3>
                <p className="timeline-company">Prayatna & DevHacks</p>
                <p className="timeline-date">2024</p>
                <ul>
                <li>Built innovative solutions in 36-hour national-level hackathons</li>
                <li>Collaborated with teams to develop functional prototypes</li>
                <li>Presented projects like LegalAI and heritage app to expert panels</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Innovation Grant Recipient</h3>
                <p className="timeline-company">Project: Agniraksha</p>
                <p className="timeline-date">2022</p>
                <ul>
                <li>Received a ₹20,000 grant for developing “Agnirakshak,” a smart firefighting assistant</li>
                <li>Integrated IoT and AI to detect and respond to fire emergencies</li>
                <li>Presented the prototype at college expos and innovation forums</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 