(function () {
	'use strict';

	Polymer({
		is: 'toth-page-about',

		properties: {
			staff: {
				type: Array,
				readOnly: true,
				value: [{
					name: 'Alex Van Camp',
					handle: 'Lange',
					role: 'Executive Producer',
					website: 'alexvan.camp',
					email: 'lange@tipofthehats.org',
					twitter: 'vancamp'
				}, {
					name: 'Sean Stradley',
					handle: 'Seanbud',
					role: 'Co-Founder',
					email: 'seanbud@tipofthehats.org',
					twitter: 'seanbud'
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
					name: 'Paul van den Hoogenhof',
					handle: 'bapaul',
					role: '3D Artist'
				}, {
					name: 'Jasmine Ho',
					handle: 'Jasbutts',
					role: 'Artist',
					website: 'jasbutts.tumblr.com',
					twitter: 'miss_jasbutts'
				}, {
					name: 'Jacko Brain',
					handle: 'omnibombulator',
					role: 'TF2 HUD Designer',
					website: 'huds.tf',
					twitter: 'omnibombulator',
					youtube: 'omnibombulator'
				}, {
					name: 'Ben Congdon',
					handle: 'bcongdon',
					role: 'Engineer',
					website: 'http://benjamincongdon.me/',
					twitter: 'BenRCongdon'
				}, {
					name: 'Erin',
					handle: 'erynn',
					role: 'Engineer',
					twitter: 'erynntf2'
				}, {
					name: 'Borja Gutierrez',
					handle: 'SirVilleta',
					role: 'Logo Designer'
				}]
			}
		}
	});
})();
