const app = require('./app'); 
const supertest = require('supertest');
const request = supertest(app);

describe('the server API', () => {
    it('gets the root endpoint', async done => {
        const response = await request.get('/api');
      
        expect(response.status).toBe(200);
        done();
    });
});