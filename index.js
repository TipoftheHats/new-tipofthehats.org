'use strict';

const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const convict = require('convict');
const app = express();

const conf = convict({
	env: {
		doc: 'The applicaton environment.',
		format: ['production', 'development'],
		default: 'development',
		env: 'NODE_ENV',
		arg: 'env'
	},
	trackerEventId: {
		doc: 'The numerical ID of the tracker event whose total to poll.',
		format: Number,
		default: 3,
		env: 'TRACKER_EVENT_ID',
		arg: 'trackerEventId'
	},
	scrapFundraiserId: {
		doc: 'The ID of the ScrapTF fundraiser whose total to poll.',
		format: String,
		default: '',
		env: 'SCRAP_FUNDRAISER_ID',
		arg: 'scrapFundraiserId'
	},
	scrapApiKey: {
		doc: 'A ScrapTF API key, needed to make API requests.',
		format: String,
		default: '',
		env: 'SCRAP_API_KEY',
		arg: 'scrapApiKey'
	}
}).getProperties();

app.use(require('compression')()); // Enable gzip
app.use(favicon(path.join(__dirname, 'src/favicon.ico')));

let root;
let port;
if (conf.env === 'production') {
	console.log('Starting in production mode (serving files from "build")');
	root = path.join(__dirname, 'build/default/src');
	port = 80;
	app.use('/bower_components', express.static(path.resolve(__dirname, 'build/default/bower_components')));
} else {
	console.log('Starting in development mode (serving files from "src")');
	app.use('/bower_components', express.static(path.resolve(__dirname, 'bower_components')));
	root = path.join(__dirname, 'src');
	port = 8080;
}

app.use(express.static(root));

app.get('/about', defaultHandler);
app.get('/donate', defaultHandler);
app.get('/terms', defaultHandler);
app.get('/conduct', defaultHandler);
app.get('/sweepstakes', defaultHandler);

// Spin up "total" lib
require('./lib/total')(conf, app);

app.listen(port, () => {
	console.log('Ready!');
});

function defaultHandler(req, res) {
	res.sendFile('index.html', {root});
}
