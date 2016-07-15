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
					info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
					Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, 
					when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
				}, {
					label: 'Surfing Exhibitions',
					info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
					Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, 
					when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
				}, {
					label: 'Rocketjump Races',
					info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
					Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, 
					when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
				}, {
					label: '1v1 MGE Tournament',
					info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
					Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, 
					when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
				}, {
					label: 'Ultiduo Matches',
					info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
					Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, 
					when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
				}, {
					label: 'Pub Games',
					info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
					Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, 
					when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
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
