const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('server', () => {
  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          });
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('should contain Chao Fan', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Chao Fan',
            age: 32
          });
        })
        .end(done);
    });
  });

});
