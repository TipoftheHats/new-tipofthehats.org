'use strict';

const request = require('request-promise');
const Promise = require('bluebird');
let formattedTotal = '$0';

module.exports = function (conf, app) {
	app.get('/stats', (req, res) => {
		res.json({
			total: formattedTotal
		});
	});

	// Fetch the latest total every 60 seconds.
	setInterval(update, 60 * 1000);

	// Initialize.
	update();

	/**
	 * Updates `formattedTotal` with the latest value from the GDQ Tracker & Scrap.tf APIs.
	 * @returns {undefined}
	 */
	function update() {
		const trackerProimise = request({
			uri: `http://tracker.tipofthehats.org/${conf.trackerEventId}?json`,
			json: true
		}).then(response => {
			if (!response) {
				return;
			}

			return parseFloat(response.agg.amount || 0);
		});

		const scraptfPromise = request({
			uri: 'https://scrap.tf/api/fundraisers/getsummary.php',
			qs: {
				fundraiser: conf.scrapFundraiserId,
				key: conf.scrapApiKey
			},
			json: true
		}).then(response => {
			if (!response) {
				return;
			}

			return parseFloat(response.donation_total);
		});

		Promise.join(trackerProimise, scraptfPromise, (trackerTotal, scraptfTotal) => {
			const freshTotal = trackerTotal + scraptfTotal;
			formattedTotal = freshTotal.toLocaleString('en-US', {
				style: 'currency',
				currency: 'USD',
				maximumFractionDigits: 0
			});
		}).catch(err => {
			console.error('Could not get donation total:', err);
		});
	}
};
