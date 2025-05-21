import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import '../styles/main.css'
import homeMain from '../assets/home-main.png'
import Pushkal_Vashishtha from '../assets/Pushkal_Vashishtha.pdf';


const Home = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = [
    'Open Source Contributor',
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/pushkalvashishtha18' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/pushkal-vashishtha-503119283/' },
    { icon: <FaTwitter />, url: 'https://twitter.com/pushkalvashishtha' }
  ]

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'GitHub',
    'VS Code',
    'Postman',
    'Cursor',
    'Windsurf'
  ]

  return (
    <section className="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', background: 'none', flexDirection: 'column', padding: '3rem 1rem' }}>
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              '--duration': `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1200px',
        zIndex: 1,
        gap: '2rem',
        flexWrap: 'wrap',
        marginBottom: '4rem',
      }}>
        {/* Left Side */}
        <div style={{ flex: 1, minWidth: 320, textAlign: 'left', padding: '2rem 1rem', maxWidth: 600 }}>
          <div style={{ fontSize: '2.2rem', fontWeight: 500, color: '#fff', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
            Hi There! <span style={{ fontSize: '2.2rem' }}>👋🏻</span>
          </div>
          <div style={{ fontSize: '2.1rem', fontWeight: 400, color: '#fff', marginBottom: '0.7rem', letterSpacing: 1 }}>
            I'M <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '2.3rem' }}>PUSHKAL VASHISHTHA</span>
          </div>
          <div style={{ fontSize: '1.6rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '1.5rem', minHeight: '2.2em' }}>
            <motion.span
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {roles[currentRole]}
            </motion.span>
          </div>
          <div className="socials" style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', justifyContent: 'left' }}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--primary)', fontSize: '2rem', transition: 'color 0.2s, transform 0.2s' }}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="cta" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
            <a href={Pushkal_Vashishtha} target="_blank" rel="noopener noreferrer">
              <button style={{ background: 'linear-gradient(90deg, var(--primary), var(--secondary))', color: '#fff', border: 'none', borderRadius: '30px', padding: '0.8rem 2.5rem', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', boxShadow: '0 2px 16px 0 rgba(76, 70, 255, 0.15)', transition: 'background 0.2s, transform 0.2s' }}>Download Resume</button>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div style={{ flex: 1, minWidth: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem', maxWidth: 500 }}>
        <img src={homeMain} alt="Developer"        style={{ maxWidth: '350px', width: '100%', height: 'auto' }} />
        </div>
      </div>

      {/* Skills Section */}
      <section style={{ width: '100%', maxWidth: '1200px', color: '#fff', zIndex: 1 }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--primary)' }}>My Skills</h2>
        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
            textAlign: 'center',
          }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              style={{
                background: 'rgba(76, 70, 255, 0.15)',
                padding: '1.5rem',
                borderRadius: '15px',
                fontWeight: 600,
                fontSize: '1.1rem',
                boxShadow: '0 4px 12px rgba(76, 70, 255, 0.2)',
                color: '#fff',
                userSelect: 'none',
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}

export default Home
