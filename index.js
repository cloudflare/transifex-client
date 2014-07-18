'use strict';

var TransifexHTTPClient = require('./client');
var _ = require('lodash');

function TransifexClient(options) {
  this.client = new TransifexHTTPClient(options);
  _.forEach(['projects', 'translations', 'resources', 'formats', 'languages'], function(name) {
    this[name] = new (require('./endpoints/' + name))(this.client);
  }, this);
};

module.exports = TransifexClient;
