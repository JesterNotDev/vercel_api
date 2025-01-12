const express = require('express');
const app = express();

const PORT = 3000;

// Gunakan environment variable untuk API key
const API_KEY = process.env.API_KEY || 'default-key';

app.get('/api', (req, res) => {
    const { key } = req.query;

    if (key === API_KEY) {
        res.status(200).send({ message: 'Access granted', success: true });
    } else {
        res.status(403).send({ message: 'Access denied', success: false });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
