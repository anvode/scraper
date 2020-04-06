
const fetchMock = require('fetch-mock-jest');
const cheerio = require('cheerio');
const scraper = require('../scraper');
const { getHtmlVersion, getHeadings, getImages } = require('../utils');
const { mockHtml5, mockHtmlNoDoctype, mockHtml4, mockHtml1, mockHeadingHtml, mockNoHeadingHtml, mockImageHtml, mockNoImageHtml } = require('../MockData');

describe('scraper js', () => {

    it('response is ok', async () => {
        fetchMock.mock('http://example.com', 200);
        const {status} = await scraper('http://example.com');
        expect(status).toBe(true);
        fetchMock.restore();
    });

    it('response is 404', async () => {
        fetchMock.mock('http://example.com/404', 404);
        const {status} = await scraper('http://example.com/404');
        expect(status).toBe(false);
        fetchMock.restore();
    });
    
    it('no DOCTYPE Defined', async () => {
        const version = getHtmlVersion(mockHtmlNoDoctype);
        expect(version).toBe('Not Defined');
    });

    it('get DOCTYPE HTML5', async () => {
        const version = getHtmlVersion(mockHtml5);
        expect(version).toBe('5');
    });

    it('get DOCTYPE HTML4', async () => {
        const version = getHtmlVersion(mockHtml4);
        expect(version).toBe('4.01');
    });

    it('get DOCTYPE XHTML1', async () => {
        const version = getHtmlVersion(mockHtml1);
        expect(version).toBe('1.0');
    });

    it('Headings exists', async () => {
        const $ = cheerio.load(mockHeadingHtml);
        const headings = getHeadings($('h1, h2, h3, h4, h5, h6'));
        expect(headings).toEqual([{'name': 'h1', 'value': 3}, {'name': 'h4', 'value': 1}, {'name': 'h3', 'value': 1}, {'name': 'h5', 'value': 1}]);
    });

    it('No Headings', async () => {
        const $ = cheerio.load(mockNoHeadingHtml);
        const headings = getHeadings($('h1, h2, h3, h4, h5, h6'));
        expect(headings).toEqual('No Headings Found');
    });

    it('No Images', async () => {
        const $ = cheerio.load(mockNoImageHtml);
        const headings = await getImages($('img'));
        expect(headings).toEqual('No Images Found');
    });
   
});
