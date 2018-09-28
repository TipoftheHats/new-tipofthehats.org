'use strict';

const request = require('request-promise');
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
		request({
			uri: `http://tracker.tipofthehats.org/${conf.trackerEventId}?json`,
			json: true
		}).then(response => {
			if (!response) {
				return;
			}

			const trackerTotal = parseFloat(response.agg.amount || 0);
			if (isNaN(trackerTotal)) {
				console.warn('trackerTotal was NaN! Not updating total.');
				return;
			}

			formattedTotal = trackerTotal.toLocaleString('en-US', {
				style: 'currency',
				currency: 'USD',
				maximumFractionDigits: 0,
				minimumFractionDigits: 0
			});
		}).catch(err => {
			console.error('Could not get donation total:', err);
		});
	}
};
