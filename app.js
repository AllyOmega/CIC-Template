const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080 ;
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const { google } = require('googleapis');

const cors = require('cors');

app.use(cors()); // Use it before your routes are set up.

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'build')));

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  '671406010293-r2t1121a3eeofdqjc2bc6v9118rdq75l.apps.googleusercontent.com', // ClientID
  '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', // Client Secret
  'https://developers.google.com/oauthplayground' // Redirect URL
);

oauth2Client.setCredentials({
    refresh_token: '1//041MEkT0LngMSCgYIARAAGAQSNwF-L9Irf2xSETdkIL0uzf8VcgENCt9qHy2F2xYZa1fH9A8fo1f_XPdBeCqraowafB8t5Oq_c6g'
  });

const accessToken = oauth2Client.getAccessToken();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'allyomega@gmail.com',
    clientId: '671406010293-r2t1121a3eeofdqjc2bc6v9118rdq75l.apps.googleusercontent.com',
    clientSecret: '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',
    refreshToken: '1//041MEkT0LngMSCgYIARAAGAQSNwF-L9Irf2xSETdkIL0uzf8VcgENCt9qHy2F2xYZa1fH9A8fo1f_XPdBeCqraowafB8t5Oq_c6g',
    accessToken: accessToken,
  },
});

// Email sending route
app.post('/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;

  let mailOptions = {
    from: '"Custom Italian Cabinets" <youremail@example.com>',
    to: 'baseballwilliam@gmail.com',
    subject: 'New Contact Form Submission',
    text: `You have a new submission from ${name} (${email}) with phone number ${phone}: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ message: 'Email successfully sent.' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error sending email.' });
  }
});

// Handles any requests that don't match the ones above,
// so React Router can handle them on the client side
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});





