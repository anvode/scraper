/** 
 * Helper Functions for Web Scraper 
 * @module scraper utils
 * @require cheerio, image-size, node-fetch
 */
const $ = require('cheerio');
const sizeOf = require('image-size');
const fetch = require('node-fetch');

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
 * Returns all Headings if exist otherwise a string
 * @param {Array} elements
 * @returns {Promise}
 */
const getImages = async (elements) => {
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
        images.push({
            url: imgUrl
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

module.exports = {
    getHtmlVersion,
    getHeadings,
    getImages
};