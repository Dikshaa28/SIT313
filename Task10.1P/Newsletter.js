import React, { useState } from 'react';
import './Newsletter.css';

function Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('http://localhost:5000/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();
      setMessage(data.message);
      if (data.success) {
        setName('');
        setEmail('');
      }
    } catch (err) {
      setMessage('Network error — please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="newsletter">
      <h3>Join our Newsletter ✉️</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Subscribe'}
        </button>
      </form>
      {message && <p className="status">{message}</p>}
    </div>
  );
}

export default Newsletter;
