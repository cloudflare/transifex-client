'use strict';

var _ = require('lodash');

function Languages(client) {
	this.client = client;
}

Languages.prototype.get = function Languages$get(options, extra, cb) {
	if (_.isFunction(options)) {
		cb = options;
		extra = null;
		options = null;
	}

	return this.client.get({
		path: '/languages/'
	}, extra, cb);
};

Languages.prototype.getLanguage = function Languages$get(options, extra, cb) {
	return this.client.get({
		path: '/language/' + options.language
	}, extra, cb);
};

module.exports = Languages;
