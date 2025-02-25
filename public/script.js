const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse incoming data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files like CSS and JS from the public directory
app.use(express.static('public'));

// Route to serve the landing page (HTML file)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Route to handle form submission (POST request)
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Form submission received:', name, email, message);

    // Respond to the front-end with a success message
    res.json({ message: 'Success' });
});

// Start the server on port 5000 or any available port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
