'use strict';

const path = require('path');
const express = require('express');
const fallback = require('express-history-api-fallback');
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
	}
}).getProperties();

app.use(require('compression')()); // enable gzip
app.use(favicon(path.join(__dirname, 'src/favicon.ico')));

let root;
if (conf.env === 'production') {
	console.log('Starting in production mode (serving files from "build")');
	root = path.join(__dirname, 'build');
} else {
	console.log('Starting in development mode (serving files from "src")');
	root = path.join(__dirname, 'src');
}

app.use(express.static(root));

app.get('/stats', (req, res) => {
	res.json({
		total: '$12,345.67'
	});
});

app.use(fallback('index.html', {root}));

app.listen(80, () => {
	console.log('Ready!');
});
