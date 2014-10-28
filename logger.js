/**
 * Created by JKosmoski on 10/28/2014.
 */
var winston = require('winston');
var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: 'app2.log' })
    ]
});

module.exports = logger;
