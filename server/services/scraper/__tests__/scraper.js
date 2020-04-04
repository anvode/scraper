
const fetchMock = require('fetch-mock-jest');
const scraper = require('../scraper');

describe('scraper js', () => {

    it('response is ok', async () => {
        fetchMock.mock('http://example.com', 200);
        const {status, statusText} = await scraper('http://example.com');
        expect(status).toBe(200);
        expect(statusText).toBe('OK');
        fetchMock.restore();
    });

    it('response is 404', async () => {
        fetchMock.mock('http://example.com/404', 404);
        const {status, statusText} = await scraper('http://example.com/404');
        expect(status).toBe(404);
        expect(statusText).toBe('Not Found');
        fetchMock.restore();
    });
});
