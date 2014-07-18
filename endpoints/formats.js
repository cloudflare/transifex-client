'use strict';

var _ = require('lodash');

function Formats(client) {
	this.client = client;
}

Formats.prototype.get = function Formats$get(options, extra, cb) {
	if (_.isFunction(options)) {
		cb = options;
		extra = null;
		options = null;
	}

	return this.client.get({
		path: '/formats/'
	}, extra, cb);
};

module.exports = Formats;
