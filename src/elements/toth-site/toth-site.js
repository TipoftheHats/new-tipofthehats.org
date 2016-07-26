(function () {
	'use strict';

	Polymer({
		is: 'toth-site',

		properties: {
			events: {
				type: Array,
				readOnly: true,
				value: [{
					label: '6v6 NA vs EU competition',
					info: 'The Best 6v6 teams in North America and Europe compete in a best of 3 format. ' +
					'Donors decide who gets the ping advantage.'
				}, {
					label: 'Surfing Exhibitions',
					info: `An exhibition of fast, precise movement on custom "surf" maps by the most practiced surfers in the game.`
				}, {
					label: 'Rocketjump Races',
					info: 'The best rocket and stickybomb jumpers show off their skills on a series of difficult custom "jump" maps.'
				}, {
					label: '1v1 MGE Tournament',
					info: 'Eight of the best fighters in the game duel it out on a series of custom arenas in a single-elimination 1v1 tournament.'
				}, {
					label: 'Ultiduo Matches',
					info: 'Combo vs. combo. Four teams of soldier & medic pairs face off in an intense king-of-the-hill tournament where coordination is everything.'
				}, {
					label: 'Pub Games',
					info: 'Our hosts and guests kick back, relax, and goof off in some more casual modes on our public servers.'
				}, {
					label: '... and more!',
					info: 'We\'ve got three days of fun planned, and it\'s all for charity!'
				}]
			}
		},

		routeChanged() {
			window.scrollTo(0, 0);
		}
	});
})();
