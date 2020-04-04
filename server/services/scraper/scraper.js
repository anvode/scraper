/** Fetch url and return a json object with expected properties
 * @module service/scraper
 * @requires node-fetch, cheerio
 */
const fetch = require('node-fetch');
const $ = require('cheerio');

/**
 * Test Url 
 * @type {string}
 */
const url = 'https://httpstat.us/404';

/**
 * the response Object 
 * @type {object}
 */
const responseObject = {
    status: 200,
    statusText: 'OK'
};

/**
 * Main function which returns the expected object
 * 
 * @param {string} url - url which has to be scraped
 * @returns {Promise}   
 */
async function scraper(url) {
    try {
        const response = await fetch(url);
        const html = await response.text();

        responseObject.status = response.status;
        responseObject.statusText = response.statusText;
        
        if (!response.ok) {
            console.log(responseObject);
            return responseObject;
        }

        const doctype = () => {

        };
        console.log(responseObject);
        return responseObject;

    } catch (err) {
        console.error(err);
    }

}

scraper(url);

module.exports = scraper;