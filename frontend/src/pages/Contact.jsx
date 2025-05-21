import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Add your form submission logic here
      await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
       // Simulated API call
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content :(
        <>
          pushkal.vashishtha40
          <br />
          02@gmail.com
        </>
      ),
      link: 'mailto:pushkal.vashishtha4002@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+91 910-925-4228',
      link: 'tel:+15551234567'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Indore',
      content: 'Madhya Pradesh, India',
      link: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/pushkal-vashishtha-503119283/' },
    { icon: <FaGithub />, url: 'https://github.com/Pushkalvashishtha18' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername' }
  ];

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="section-title">Get In Touch</h1>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-card"
                >
                  <div className="info-icon">{info.icon}</div>
                  <h3>{info.title}</h3>
                  <p>{info.content}</p>
                </a>
              ))}
            </div>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <p className="success-message">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="error-message">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 