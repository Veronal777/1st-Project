const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (your HTML, CSS, etc.)
app.use(express.static(__dirname));

// Example API endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Here you would check credentials in a real app
    res.json({ message: `Received login for ${email}` });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});