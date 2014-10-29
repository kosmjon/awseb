/**
 * Created by JKosmoski on 10/28/2014.
 */
(function () {"use strict";}());

var request = require('supertest');
var should = require('should');
var app = require('../main');

describe('index', function () {
    xit('should return 200 for URL /', function (done) {
        request(app)
            .get('/')
            .expect(200)
            .end(function (err, res) {
                should.not.exist(err);
                done();
            });
    });
});