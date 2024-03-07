const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public')); // Serve static files from the "public" directory

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' }); // Example for the home page
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' }); // Assuming you want to pass a title to your EJS template
  });

app.get('/contact', (req, res) => {
res.render('contact', { title: 'Contact Us' }); // Assuming you want to pass a title to your EJS template
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});