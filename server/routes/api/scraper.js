/** Express router providing web scraping api
 * @module routes/api/scraper
 * @requires express
 */

const express = require('express');
const router = express.Router();

/**
 * Route serving without url parameter. 
 * Fallback if no validation from client exist
 * @param {string} path - Express path
 * @param {Function} callback - Express middleware.
 */
router.get('/', async (req, res) => {
    try {
        res.status(400).json({
            message: 'please try /api/scraper/[valid url http(s)://url]'
        });

    } catch (err) {
        res.status(400).json({
            msg: `Something went wrong ${err}`,
        });
    }
});

/**
 * Route serving web scraper api
 * @param {string} path - Express path
 * @param {Function} callback - Express middleware.
 */
router.get('/:url', async (req, res) => {
    try {
        const url = await req.params.url;
        res.json({
            msg: `Url ${url}`,
        });

    } catch (err) {
        res.status(404).json({
            msg: 'Url not found',
        });
    }
});

module.exports = router;