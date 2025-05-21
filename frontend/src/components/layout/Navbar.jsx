import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoPort from '../../assets/logo_port.png';
import Pushkal_Vashishtha from '../../assets/Pushkal_Vashishtha.pdf';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logoPort} alt="Logo" className="logo-image" />
        </Link>

        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/projects" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <Link to="/Blog" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
          <a href={Pushkal_Vashishtha} className="nav-link resume-btn" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>

        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 