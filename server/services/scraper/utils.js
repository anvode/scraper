/** 
 * Helper Functions for Web Scraper 
 * @module scraper utils
 */

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

module.exports = {
    getHtmlVersion
};