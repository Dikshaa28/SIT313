import React, { useState } from 'react';
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setMessage(data.message);
      if (data.success) setEmail('');
    } catch (err) {
      setMessage('Network error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="footer-container">

      <div className="newsletter-banner">
        <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Subscribe'}
          </button>
        </form>
        {message && <p className="footer-message">{message}</p>}
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li>Home</li>
            <li>Questions</li>
            <li>Articles</li>
            <li>Tutorials</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>FAQs</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Stay Connected</h4>
          <ul className="footer-links-list">
            <li><a href="https://www.deakin.twitter.com" target="_blank" rel="noreferrer">www.deakin.twitter.com</a></li>
            <li><a href="https://www.deakin.facebook.com" target="_blank" rel="noreferrer">www.deakin.facebook.com</a></li>
            <li><a href="https://www.deakin.instagram.com" target="_blank" rel="noreferrer">www.deakin.instagram.com</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-brand">DEV@Deakin</p>
        <div className="footer-legal">
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Code of Conduct</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
