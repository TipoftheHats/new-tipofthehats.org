'use strict';

let lex = require('letsencrypt-express');
const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const convict = require('convict');
const HOMEDIR = require('os').homedir();
const app = express();

const conf = convict({
	env: {
		doc: 'The applicaton environment.',
		format: ['production', 'development'],
		default: 'development',
		env: 'NODE_ENV',
		arg: 'env'
	},
	hostname: {
		doc: 'The hostname to bind.',
		format: String,
		default: 'localhost',
		env: 'HOSTNAME',
		arg: 'hostname'
	}
}).getProperties();

console.log(`Starting up ${conf.hostname}...`);

app.use(require('compression')()); // enable gzip
app.use(favicon(path.join(__dirname, 'src/favicon.ico')));

if (conf.env === 'production') {
	console.log('Starting in production mode (serving files from "dist")');
	app.use(express.static('dist'));
} else {
	console.log('Starting in development mode (serving files from "src" & using test certs from Let\'s Encrypt)');
	app.use(express.static('src'));
	lex = lex.testing();
}

lex.create({
	configDir: path.join(`${HOMEDIR}`, '/letsencrypt/etc'),
	onRequest: app,
	approveRegistration(hostname, approve) {
		if (hostname === conf.hostname) {
			approve(null, {
				domains: [conf.hostname],
				email: conf.email,
				agreeTos: true
			});
		}
	}
}).listen([80], [443, 5001], function () {
	const protocol = ('requestCert' in this) ? 'https' : 'http';
	console.log(`Listening at ${protocol}://${conf.hostname}:${this.address().port}`);
});
