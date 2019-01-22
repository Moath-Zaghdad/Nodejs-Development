const app = require('./server').app;
const request = require('supertest');

describe('Server', () => {
    it('should return Hello', done => {
        request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect('Content-Length', '19')
            .expect(200)
            .end(done);
    });
});
