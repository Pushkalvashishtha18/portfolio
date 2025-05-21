import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/pushkalvashishtha18' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/pushkal-vashishtha-503119283/' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername' },
    { icon: <FaEnvelope />, url: 'mailto:pushkal.vashishtha4002@gmail.com' }
  ];

  return (
    <footer className="footer">
      <div className="footer-bg" />
      <div className="footer-content">
        <div className="footer-social">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="footer-text">
          <p className="footer-tagline">Let's build something great together.</p>
          <p>Designed & Built with ❤️ by <span className="footer-author">Pushkal Vashishtha</span></p>
          <p>© {currentYear} Pushkal_18. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 