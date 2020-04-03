const express = require('express');

const app = express();

// ROUTES
////////////////////////

// Any
app.get('*', (req, res) => {
    res.send('Home');
});

module.exports = app;