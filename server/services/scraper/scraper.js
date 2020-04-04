/** Fetch url and return a json object with expected properties
 * @module service/scraper
 * @requires node-fetch, cheerio
 */
const fetch = require('node-fetch');
const $ = require('cheerio');
const { performance } = require('perf_hooks');

/**
 * the response Object 
 * @type {object}
 */
const responseObject = {
    status: 200,
    statusText: 'OK',
    loadingTime: 0
};

/**
 * Main function which returns the expected object
 * 
 * @param {string} url - url which has to be scraped
 * @returns {Promise}   
 */
async function scraper(url) {
    try {
        const startTime = Math.floor(performance.now());
        const response = await fetch(url);
        const html = await response.text();
        const endTime = Math.floor(performance.now());

        responseObject.loadingTime = `${(endTime - startTime) / 1000}s`;
        responseObject.status = response.status;
        responseObject.statusText = response.statusText;
        
        if (!response.ok) {
            return responseObject;
        }

        return responseObject;

    } catch (err) {
        console.error(err);
        responseObject.status = 404;
        responseObject.statusText = 'Not Found';
        return responseObject; 

    }

}

module.exports = scraper;