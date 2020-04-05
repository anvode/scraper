/** 
 * Helper Functions for Web Scraper 
 * @module scraper utils
 * @require cheerio 
 */
const $ = require('cheerio');

/**
 * Get the right HTML version
 * @param {Array} root 
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

module.exports = {
    getHtmlVersion,
    getHeadings
};