const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Route untuk root
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Route untuk API
app.get('/api', (req, res) => {
    res.send({ message: 'API is working!' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
