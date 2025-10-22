require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // allow React frontend to talk to this backend
app.use(express.json()); // parse JSON requests

// Configure SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const FROM_EMAIL = process.env.FROM_EMAIL;


app.post('/subscribe', async (req, res) => {
  try {
    const { name, email } = req.body;

    // Basic validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ success: false, message: 'Please enter a valid email.' });
    }

    // Compose the email
    const msg = {
      to: email,
      from: FROM_EMAIL,
      subject: 'Welcome to DEV@Deakin 🎉',
      text: `Hi ${name || 'there'}! Thanks for joining DEV@Deakin. You're now part of our community.`,
      html: `
        <h2 style="font-family:sans-serif;color:#2563eb;">Welcome to DEV@Deakin 🎉</h2>
        <p>Hi ${name || 'friend'},</p>
        <p>Thanks for joining our community. Stay tuned for updates and opportunities!</p>
      `
    };

    // Send email using SendGrid
    await sgMail.send(msg);
    console.log(`✅ Email sent successfully to ${email}`);
    res.json({ success: true, message: 'Welcome email sent successfully!' });

  } catch (err) {
    console.error(' SendGrid error:', err.response?.body || err.message);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
