/** Express router providing web scraping api
 * @module routes/api/scraper
 * @requires express
 */

const express = require('express');
const router = express.Router();
const { validUrl } = require('../../../utils');

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
        res.json({
            msg: `Url ${url}`,
        });

    } catch (err) {
        res.status(404).json({
            status: 404,
            msg: 'Url not Reachable',
        });
    }
});

module.exports = router;