'use strict';
var _ = require('lodash');
var url = require('url');
var API_HOST = 'www.transifex.com';
var API_PATH = '/api/2';
var needle = require('needle');


function TransifexHTTPClient(options) {
	this.username = options.username;
	this.password = options.password;
}

TransifexHTTPClient.prototype.request = function TransifexClient$request(method, uri, data, options, cb) {
	if (_.isFunction(options)) {
		cb = options;
		options = {}
	}

	uri = url.format(_.extend({}, {
		protocol: 'https:',
		hostname: API_HOST,
		pathname: API_PATH + uri.path
	}, uri));

	options = _.defaults({}, options, {
		user_agent: 'TransifexHTTPClient/0.0.0 node/' + process.version,
		username: this.username,
		password: this.password,
		compressed: true
	});

	var r = needle.request(method, uri, data, options, cb);

	return r;
};

TransifexHTTPClient.prototype.get = function TransifexClient$get(uri, options, cb) {
	return this.request('GET', uri, null, options, cb);
};

TransifexHTTPClient.prototype.head = function TransifexClient$get(uri, options, cb) {
	return this.request('HEAD', uri, null, options, cb);
};

TransifexHTTPClient.prototype.post = function TransifexClient$get(uri, data, options, callback) {
	return this.request('POST', uri, data, options, cb);
};

TransifexHTTPClient.prototype.put = function TransifexClient$get(uri, data, options, callback) {
	return this.request('PUT', uri, data, options, cb);
};

TransifexHTTPClient.prototype['delete'] = function TransifexClient$get(uri, data, options, callback) {
	return this.request('DELETE', uri, data, options, cb);
};

module.exports = TransifexHTTPClient;
