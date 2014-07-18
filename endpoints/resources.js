'use strict';

var _ = require('lodash');

function Resources(client) {
	this.client = client;
}

Resources.prototype.get = function Resources$get(options, extra, cb) {
	return this.client.get({
		path: '/project/' + options.project + '/resources/',
		query: options.query
	}, extra, cb);
};

Resources.prototype.getResource = function Resources$getResource(options, extra, cb) {
	var path = [
		'/project/',
		options.project,
		'/resource/',
		options.resource
	];

	if (options.pseudo) {
		path.push(
			'/pseudo/'
		);
		options.query = options.query || {};
		options.query.pseudo_type = 'MIXED';
	}


	return this.client.get({
		path: path.join(''),
		query: options.query
	}, extra, cb);
}

module.exports = Resources;
