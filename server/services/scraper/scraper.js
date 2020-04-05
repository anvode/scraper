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
        status: true,
        results: [
            {
                name: 'status',
                value: 200
            },
            {
                name: 'statusText',
                value: 'OK'
            }

        ]
    };

    try {

        const startTime = Math.floor(performance.now());
        const response = await fetch(url);
        const html = await response.text();
        const $ = await cheerio.load(html);
        const endTime = Math.floor(performance.now());

        responseObject.status = response.ok;
        responseObject.results[0].value = response.status;
        responseObject.results[1].value = response.statusText;
        
        if (!response.ok) {
            return responseObject;
        }
        
        responseObject.results.push({
            name: 'Load Time',
            value: `${(endTime - startTime) / 1000}s`
        });

        const htmlVersion = getHtmlVersion($.root()[0].children);
        responseObject.results.push({
            name: 'HTML Version',
            value: htmlVersion
        });

        responseObject.results.push({
            name: 'Title',
            value: $('title').text()
        });

        return responseObject;

    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        responseObject.status = false;
        responseObject.results[0].value = 404;
        responseObject.results[1].value = 'Not Found';

        return responseObject; 

    }

}

module.exports = scraper;