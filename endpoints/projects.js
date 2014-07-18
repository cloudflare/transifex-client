'use strict';

function Projects(client) {
	this.client = client;
}

Projects.prototype.get = function Projects$get(options, extra, cb) {
	return this.client.get({
		path: '/project/' + options.project,
		query: options.query
	}, extra, cb);
};

module.exports = Projects;
