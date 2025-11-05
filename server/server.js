const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : [];

const allowNoOrigin = process.env.ALLOW_NO_ORIGIN === 'true';

app.use(cors({
  origin: function (origin, callback) {
    if ((allowNoOrigin && !origin) || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

app.get('/', (req, res) => {
  res.send('Contact form server is up and running!');
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.USER,
    subject: '📬 Vercel Contact Form Submission',
    text: `•✉️ From: ${email}\n•👤 Name: ${name}\n•💬 Message:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending message.');
    }
    console.log('Email sent: ' + info.response);
    return res.status(200).send('Message sent successfully!');
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
