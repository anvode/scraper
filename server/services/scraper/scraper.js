/** Fetch url and return a json object with expected properties
 * @module service/scraper
 * @requires node-fetch, cheerio
 */
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const { performance } = require('perf_hooks');
const { getHtmlVersion, getHeadings, getImages, getLinks } = require('./utils');

const errorObject = [ 
    {
        name: 'status',
        value: 200
    },
    {
        name: 'statusText',
        value: 'OK'
    }
];

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
        results: []
    };

    try {

        const startTime = Math.floor(performance.now());
        const response = await fetch(url);
        const html = await response.text();
        const $ = await cheerio.load(html);
        const endTime = Math.floor(performance.now());

        responseObject.status = response.ok;
        
        if (!response.ok) {
            errorObject[0].value = response.status;
            errorObject[1].value = response.statusText;
            responseObject.results.push(...errorObject);
            return responseObject;
        }

        const htmlVersion = getHtmlVersion($.root()[0].children);
        responseObject.results.push({
            name: 'HTML Version',
            value: htmlVersion
        });

        responseObject.results.push({
            name: 'Title',
            value: $('title').text()
        });

        const headings = getHeadings($('h1, h2, h3, h4, h5, h6'));
        responseObject.results.push({
            name: 'Number of headings and their level',
            value: headings
        });

        const images = await getImages($('img'), url);
        responseObject.results.push({
            name: 'The number of pictures and the largest one',
            value: images
        });

        const {internalLinks, externalLinks} = getLinks($('a'), url);
        responseObject.results.push({
            name: 'Internal links and their count',
            value: internalLinks
        });

        responseObject.results.push({
            name: 'External links and their count',
            value: externalLinks
        });
        
        responseObject.results.push({
            name: 'Load Time',
            value: `${(endTime - startTime) / 1000}s`
        });
        return responseObject;

    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);

        responseObject.status = false;
        errorObject[0].value = err.name === 'TypeError' ? 500 : 404;
        errorObject[1].value = err.name === 'TypeError' ? 'Oops Something failed!' : 'Not Found';
        responseObject.results = errorObject;

        return responseObject; 

    }

}

module.exports = scraper;