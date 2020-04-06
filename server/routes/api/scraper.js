/** Express router providing web scraping api
 * @module routes/api/scraper
 * @requires express
 */

const express = require('express');
const router = express.Router();
const { validUrl } = require('../../../utils');
const scraper = require('../../services/scraper/scraper');

/**
 * Route serving web scraper api
 * @param {string} path - Express path
 * @param {Function} callback - Express middleware.
 */
router.get('/', async (req, res) => {
    try {
        const url = await req.query.url;
        const urlIsValid = url ? validUrl(url) : false;

        if (!urlIsValid) {
            return res.status(400).json({
                message: 'please try /api/scraper/[valid url http(s)://url]'
            });
        }

        const responseObject = await scraper(url);
        res.json(responseObject);

    } catch (err) {
        res.status(404).json({
            msg: err,
        });
    }
});

module.exports = router;