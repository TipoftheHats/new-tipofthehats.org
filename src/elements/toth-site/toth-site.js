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
			},
			staff: {
				type: Array,
				readOnly: true,
				value: [{
					name: 'Sean Stradley',
					handle: 'Seanbud',
					role: 'Co-Founder',
					email: 'seanbud@tipofthehats.org',
					twitter: 'seanbud'
				}, {
					name: 'Alex Van Camp',
					handle: 'Lange',
					role: 'Co-Founder',
					website: 'alexvan.camp',
					email: 'lange@tipofthehats.org',
					twitter: 'vancamp'
				}, {
					name: 'Kurt Russ',
					handle: 'truktruk',
					role: 'Co-Founder',
					email: 'truktruk@tipofthehats.org',
					twitter: 'kurtisruss'
				}, {
					name: 'Jason Baxter',
					handle: 'whisker',
					role: 'Co-Founder',
					email: 'whisker@tipofthehats.org',
					twitter: 'rbjaxter'
				}, {
					name: 'William Hild',
					handle: 'Auzzie',
					role: 'Organizer',
					email: 'auzzie@tipofthehats.org',
					twitter: 'auzzietf2'
				}, {
					name: 'Jim Cox',
					handle: 'Enryu',
					role: 'Organizer',
					email: 'enryu@tipofthehats.org'
				}, {
					name: 'Alex Pylyshyn',
					handle: 'dashner',
					role: 'Production',
					email: 'isodes@gmail.com',
					twitter: 'apylyshyn'
				}, {
					name: 'Anthony Oetzmann',
					handle: 'Airon',
					role: 'Audio Engineer',
					email: 'aironaudio@gmail.com',
					twitter: 'airont'
				}, {
					name: 'Rob Middleton',
					handle: 'Rob',
					role: 'Web Design & Development',
					website: 'www.middlerob.com',
					twitter: 'rob__ot'
				}, {
					name: 'Ness Delacroix',
					handle: 'uberchain',
					role: 'SFM Artist',
					website: 'uberchain.deviantart.com',
					twitter: 'uberchain',
					youtube: 'uberchainYT'
				}, {
					name: 'Ryan Heads',
					handle: 'Krunkidile',
					role: 'SFM Artist',
					twitter: 'krunkidile',
					youtube: 'anangrysockpuppet'
				}, {
					name: 'Jacko Brain',
					handle: 'omnibombulator',
					role: 'TF2 HUD Designer',
					website: 'huds.tf',
					twitter: 'omnibombulator',
					youtube: 'omnibombulator'
				}, {
					name: 'Jasmine Ho',
					handle: 'Jasbutts',
					role: 'Artist',
					website: 'jasbutts.tumblr.com',
					twitter: 'miss_jasbutts'
				}, {
					name: 'Borja Gutierrez',
					handle: 'SirVilleta',
					role: 'Logo Designer'
				}]
			}
		}
	});
})();
