/** 
 * Helper Functions for Web Scraper 
 * @module scraper utils
 * @require cheerio, image-size, node-fetch, url
 */
const $ = require('cheerio');
const sizeOf = require('image-size');
const fetch = require('node-fetch');
const url = require('url');
const { validUrl } = require('../../../utils');

/**
 * Return the right HTML version
 * @param {Array} root
 * @returns {string}
 */
const getHtmlVersion = (root) => {
    const doctypeData = root.filter(node => node.name === '!doctype')[0];
    if (!doctypeData) return 'Not Defined';

    const doctype = doctypeData.data;
    const splitDoctypeString = doctype.split(' ');

    if (splitDoctypeString[splitDoctypeString.length - 1] === 'html') return '5';

    const htmlRegex = /\d\.\d+/g ;
    const matchVersion = doctype.match(htmlRegex);

    return matchVersion[0];
};

/**
 * Returns all Headings if exist otherwise a string
 * @param {Array} elements
 * @returns {(string|Array)}
 */
const getHeadings = (elements) => {
    if ($(elements).length === 0) {
        return 'No Headings Found';
    }
    const headings = {};
    $(elements).each((i, element) => {
        if (!headings[element.name]) {
            headings[element.name] = 1;
        } else {
            headings[element.name] += 1;
        }
    });
    
    return Object.keys(headings).map(key => ({
        name: key,
        value: headings[key]
    }));
};

/**
 * Returns all Images if exist otherwise a string
 * @param {Array} elements
 * @param {String} scrapeUrl
 * @returns {Promise}
 */
const getImages = async (elements, scrapeUrl) => {
    const $elements = $(elements); 

    if ($elements.length === 0) {
        return 'No Images Found';
    }

    let imageLength = $elements.length;
    let images = [];

    $elements.each((i, element) => {
        const $element = $(element);

        const imgUrl = $element.attr('src');
        if (!imgUrl || !(/\.(gif|jpg|jpeg|tiff|png|svg)/i).test(imgUrl)) {
            imageLength--;
            return;
        }
        const absoluteUrl = absolutePath(imgUrl, scrapeUrl);

        images.push({
            url: absoluteUrl
        });
    });

    const allImageDimensions = await Promise.all(images.map(async img => {
        const fetchImage = await fetch(img.url);
        const bufferImage = await fetchImage.buffer();

        return {
            ...img,
            width: sizeOf(bufferImage).width
        };
    }));

    const largestImage = allImageDimensions.sort((a, b) => b.width - a.width)[0].url;

    return [
        {
            name: 'Count',
            value: imageLength
        },
        {
            name: 'Largest Image',
            value: largestImage
        }
    ];
};

/**
 * Returns all Links if exist otherwise a string
 * @param {Array} elements
 * @param {String} scrapeUrl
 * @returns {(string|Object)}
 */
const getLinks = (elements, scrapeUrl) => {
    const $elements = $(elements); 
    let internalLinks = null;
    let externalLinks = null;
    if ($elements.length === 0) {
        return {
            internalLinks: 'No Links Found',
            externalLinks: 'No Links Found'
        };
    }

    const internalLinksObj = {};
    const externalLinksObj = {};
    $elements.each((i, element) => {
        const $element = $(element);
        const linkUrl = $element.attr('href');

        if (!linkUrl || (/^(#|javascript|data|chrome|mailto|tel|sms|callto|mms|skype)/).test(linkUrl)) {
            return;
        }
        const absoluteUrl = absolutePath(linkUrl, scrapeUrl);

        const scrapeUrlBase = url.parse(scrapeUrl).host;
        const linkUrlBase = url.parse(absoluteUrl).host;

        if (scrapeUrlBase === linkUrlBase ) {
            internalLinksObj[absoluteUrl] = internalLinksObj[absoluteUrl] ? ++internalLinksObj[absoluteUrl] : 1;
        } else {
            externalLinksObj[absoluteUrl] = externalLinksObj[absoluteUrl] ? ++externalLinksObj[absoluteUrl] : 1;
        }
        
    });
    
    internalLinks = Object.keys(internalLinksObj).length > 0 ? Object.keys(internalLinksObj).map(key => ({
        name: key,
        value: internalLinksObj[key]
    })) : 'No Links Found';

    externalLinks = Object.keys(externalLinksObj).length > 0 ? Object.keys(externalLinksObj).map(key => ({
        name: key,
        value: externalLinksObj[key]
    })) : 'No Links Found';
    return {
        internalLinks,
        externalLinks
    };
};

/**
 * Check if url have absolute path
 * @param {string} str - url to check
 * @param {string} scrapeUrl - url which is scraping
 */
const absolutePath = (str, scrapeUrl) => {
    if (validUrl(str)) return str;
    
    const {protocol, host} = url.parse(scrapeUrl);
    const protocolNotExist = (/^(\/\/)/).test(str);

    return `${protocol}${protocolNotExist ? '' : `//${host}`}${str}`;
};

module.exports = {
    getHtmlVersion,
    getHeadings,
    getImages,
    getLinks
};