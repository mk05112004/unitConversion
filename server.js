const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const blogControllers = require ('./controllers/blogControllers.js');

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
// Fallback route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to convert length
app.post('/convert/length', blogControllers.length_unit);

// Route to convert weight
app.post('/convert/weight', blogControllers.weight_unit);

// Route to convert temperature
app.post('/convert/temperature', blogControllers.temperature_unit);

// Start the server
app.listen(port, () => {
    console.log(`Unit Converter API running on http://localhost:${port}`);
});
