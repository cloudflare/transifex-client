'use strict';

function Translations(client) {
	this.client = client;
}

Translations.prototype.get = function Translations$get(options, extra, cb) {
	return this.client.get({
		path: '/project/' + options.project + '/resource/' + options.resource + '/translation/' + options.language + '/',
		query: options.query
	}, extra, cb);
};

module.exports = Translations;
