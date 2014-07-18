# Transifex Client

A HTTP API client for the Transifex translation service.

```javascript
var TransifexClient = require('transifex-client');
var transifex = new TransifexClient({
	username: 'translator',
	password: 'password'
});

transifex.projects.get({project: 'sample-project'}, function(err, data) {
	console.log(data.description);
});
```

If no callback is provided, a readable stream is returned.

```javascript
var translations = transifex.translations.get({
	project: 'sample-project',
	resource: 'sample',
	language: 'es'
}, {
	parse: false
});

translations
	.pipe(fs.createWritableStream('./sample-project.es.json'));
```

# Roadmap to 1.0

- [x] Request and handle gzip content
- [x] Support streaming responses
- [x] Implement methods for retrieving translations for a project
- [ ] Implement uploading new and updated resources
- [ ] Implement removing resources
- [ ] Implement languages
- [ ] Implement resource strings
- [ ] Implement statistics
- [ ] Create unit tests
- [ ] Setup Travis CI
- [ ] Should "get*" methods exist? If not, how should this API be organized?
- [ ] Finalize API


## TransifexClient

* username
* password


## TransifexClient.prototype.formats

### get

```javascript
transifex.formats.get(function(err, resp) {
	console.log(resp.body.XLIFF)
});
```

## TransifexClient.prototype.languages

### get

```javascript
transifex.languages.get(function(err, resp) {
	console.log(resp.body[0].name);
});
```

### getLanguage

* language

```javascript
transifex.languages.getLanguage({language: 'pt_BR'}, function(err, resp) {
	console.log(resp.body.name);
});
```

## TransifexClient.prototype.projects

### get

* project

```javascript
transifex.projects.get({
	project: 'sample-project',
	query: {
		details: true
	}
}, function(err, resp) {
	console.log(resp.body.description);
});
```


## TransifexClient.prototype.resources

### get

* project

```javascript
transifex.resources.get({project: 'sample-project'}, function(err, resp) {
	console.log(resp.body[0].slug);
});
```

### getResource

* project
* resource

```javascript
transifex.resources.getResource({
	project: 'sample-project',
	resource: 'sample',
	query: {
		details: true
	}
}, function(err, resp) {
	console.log(resp.body.wordcount);
});
```

## TransifexClient.prototype.translations

### get

* project
* resource (file)
* language

```javascript
transifex.translations.get({
	project: 'sample-project',
	resource: 'sample',
	language: 'es'
}, function(err, resp) {
	console.log(resp.body);
});
```
