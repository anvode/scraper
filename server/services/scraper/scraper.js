/** Fetch url and return a json object with expected properties
 * @module service/scraper
 * @requires node-fetch, cheerio
 */
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const { performance } = require('perf_hooks');
const { getHtmlVersion } = require('./utils');

/**
 * Main function which returns the expected object
 * 
 * @param {string} url - url which has to be scraped
 * @returns {Promise}   
 */
async function scraper(url) {
    /**
     * the response Object 
     * @type {object}
     */
    const responseObject = {
        status: 200,
        statusText: 'OK'
    };

    try {

        const startTime = Math.floor(performance.now());
        const response = await fetch(url);
        const html = await response.text();
        const $ = await cheerio.load(html);
        const endTime = Math.floor(performance.now());

        responseObject.status = response.status;
        responseObject.statusText = response.statusText;
        
        if (!response.ok) {
            return responseObject;
        }
        
        responseObject.loadingTime = `${(endTime - startTime) / 1000}s`;
        responseObject.htmlVersion = getHtmlVersion($.root()[0].children);
        responseObject.title = $('title').text();

        return responseObject;

    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        responseObject.status = 404;
        responseObject.statusText = 'Not Found';
        return responseObject; 

    }

}

module.exports = scraper;