const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('should return hello world response', (done) => {
    request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
        expect(res.body).toInclude({
                error: 'Page not found.'
            })
        })
    .end(done);
});

it('should return target user', (done) => {
    request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
        expect(res.body).toInclude({
                name: 'Joe',
                age: 26
            });
        })
    .end(done);
});
