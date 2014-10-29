'use strict';

var winston = require('winston');

module.exports = function(opts) {
	var fileName = opts.logFileName || 'app.log';
	return new (winston.Logger)({
	  transports: [
	    new (winston.transports.Console)(),
	    new (winston.transports.File)({ filename: fileName})
	  ]
	});
}
