/** 
 * Express app for web scraper api
 * @module api
 * @requires express
 */

const express = require('express');
const cors = require('cors');
const app = express();
const scraperRoute = require('./routes/api/scraper');

/**
 * Routes serving web scraper api
 * @param {string} path - Express path
 * @param {Object} routes - Express middleware.
 */
app.use('/api/scraper', cors(), scraperRoute);

/**
 * Fallback if Api Route does not exist
 * @param {string} path - Express paths
 * @param {Function} callback - Express middleware.
 */
app.get('/api', (req, res) => {
    res.json({
        message: 'Wrong Endpoint'
    });
});

module.exports = app;