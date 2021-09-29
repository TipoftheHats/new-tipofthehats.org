(function () {
	/**
	 * @customElement
	 * @polymer
	 */
	class TothPageAbout extends Polymer.Element {
		static get is() {
			return 'toth-page-about';
		}

		static get properties() {
			return {
				selected: {
					type: Number,
					value: 0
				},
				selectedYear: {
					type: String,
					value: '2019'
				},
				years: {
					type: Array,
					value: ['2019', '2018', '2017', '2016', '2015', '2014', '2013']
				},
				staff: {
					type: Array,
					readOnly: true,
					value: [{
						name: 'Sean Stradley',
						handle: 'Seanbud',
						website: 'http://twitch.tv/seanbud',
						email: 'seanbud@tipofthehats.org',
						twitter: 'seanbud',
						yearsInvolved: [
							{year: '2019', categories: ['ops'], roles: ['Co-Founder', 'Operations Lead']},
							{year: '2018', categories: ['ops'], roles: ['Co-Founder']},
							{year: '2017', categories: ['ops'], roles: ['Co-Founder']},
							{year: '2016', categories: ['ops'], roles: ['Co-Founder']},
							{year: '2015', categories: ['ops'], roles: ['Co-Founder']},
							{year: '2014', categories: ['ops'], roles: ['Co-Founder']},
							{year: '2013', categories: ['ops'], roles: ['Co-Founder']}
						]
					},
					{
						name: 'Jason Baxter',
						handle: 'whisker',
						website: 'http://twitch.tv/whisker',
						email: 'jason@tipofthehats.org',
						twitter: 'rbjaxter',
						yearsInvolved: [
							{year: '2019', categories: ['ops'], roles: ['Co-Founder', 'Operations Lead']},
							{year: '2018', categories: ['ops'], roles: ['Co-Founder']},
							{year: '2017', categories: ['ops'], roles: ['Co-Founder']},
							{year: '2016', categories: ['ops'], roles: ['Co-Founder']},
							{year: '2015', categories: ['ops'], roles: ['Co-Founder']},
							{year: '2014', categories: ['ops'], roles: ['Co-Founder']},
							{year: '2013', categories: ['ops'], roles: ['Co-Founder']}
						]
					},
					{
						name: 'Kurt Russ',
						handle: 'truktruk',
						website: 'http://twitch.tv/truktruk',
						email: 'kurt@tipofthehats.org',
						twitter: 'kurtisruss',
						yearsInvolved: [
							{year: '2019', categories: ['ops', 'talent', 'prod'], roles: ['Co-Founder', 'Post-Produced Content']},
							{year: '2018', categories: ['ops', 'talent', 'prod'], roles: ['Co-Founder', 'Post-Produced Content']},
							{year: '2017', categories: ['ops', 'talent', 'prod'], roles: 'Co-Founder'},
							{year: '2016', categories: ['ops', 'talent', 'prod'], roles: 'Co-Founder'},
							{year: '2015', categories: ['ops', 'talent', 'prod'], roles: 'Co-Founder'},
							{year: '2014', categories: ['ops', 'talent', 'prod'], roles: 'Co-Founder'},
							{year: '2013', categories: ['ops', 'talent', 'prod'], roles: 'Co-Founder'}
						]
					},
					{
						name: 'Austin Hild',
						handle: 'Auzzie',
						email: 'auzzie@tipofthehats.org',
						twitter: 'auzzietf2',
						yearsInvolved: [
							{year: '2019', categories: ['ops', 'prod'], roles: ['Organizer']},
							{year: '2018', categories: ['ops'], roles: ['Organizer']},
							{year: '2017', categories: ['ops'], roles: ['Organizer']},
							{year: '2016', categories: ['ops'], roles: ['Organizer']},
							{year: '2015', categories: ['ops'], roles: ['Organizer']},
							{year: '2014', categories: ['ops'], roles: ['Organizer']},
							{year: '2013', categories: ['ops'], roles: ['Organizer']}
						]
					},
					{
						name: 'Jasmine Ho',
						handle: 'Jasbutts',
						email: 'jasbutts@tipofthehats.org',
						website: 'http://jasbutts.com/',
						twitter: 'miss_jasbutts',
						yearsInvolved: [
							{year: '2019', categories: ['ops', 'art'], roles: ['Merchandise Lead', 'Artist']},
							{year: '2018', categories: ['ops', 'art'], roles: ['Merch Coordinator & Artist']}
						]
					},
					{
						name: 'Anthony Oetzmann',
						handle: 'Airon',
						email: 'aironaudio@gmail.com',
						twitter: 'airont',
						website: 'http://aironaudio.weebly.com/',
						yearsInvolved: [
							{year: '2017', categories: ['prod'], roles: ['Audio Engineer']},
							{year: '2016', categories: ['prod'], roles: ['Audio Engineer']},
							{year: '2015', categories: ['prod'], roles: ['Audio Engineer']}
						]
					},
					{
						name: 'Ness Delacroix',
						handle: 'uberchain',
						website: 'http://uberchain.format.com/',
						twitter: 'uberchain',
						youtube: 'uberchainYT',
						yearsInvolved: [
							{year: '2019', categories: ['art'], roles: ['SFM Lead']},
							{year: '2018', categories: ['art'], roles: ['SFM Lead']},
							{year: '2017', categories: ['art'], roles: ['SFM Lead']},
							{year: '2016', categories: ['art'], roles: ['SFM Lead']},
							{year: '2015', categories: ['art'], roles: ['SFM Lead']}
						]
					},
					{
						name: 'Steve Giarla',
						handle: 'stevebud',
						yearsInvolved: [
							{year: '2019', categories: ['art'], roles: ['Videographer']}
						]
					},
					{
						name: 'Ryan Heads',
						handle: 'Krunkidile',
						twitter: 'krunkidile',
						youtube: 'anangrysockpuppet',
						yearsInvolved: [
							{year: '2019', categories: ['art'], roles: ['SFM Artist']},
							{year: '2018', categories: ['art'], roles: ['SFM Artist']},
							{year: '2017', categories: ['art'], roles: ['SFM Artist']},
							{year: '2016', categories: ['art'], roles: ['SFM Artist']},
							{year: '2015', categories: ['art'], roles: ['SFM Artist']}
						]
					},
					{
						name: 'Tim BL',
						handle: 'SediSocks',
						yearsInvolved: [
							{year: '2019', categories: ['art'], roles: ['3D Modeler']},
							{year: '2018', categories: ['art'], roles: ['3D Modeler']},
							{year: '2017', categories: ['art'], roles: ['3D Modeler']},
							{year: '2016', categories: ['art'], roles: ['3D Modeler']},
							{year: '2015', categories: ['art'], roles: ['3D Modeler']}
						]
					},
					{
						name: 'Erin',
						handle: 'erynn',
						twitter: 'erynntf2',
						website: 'http://erynn.space',
						yearsInvolved: [
							{year: '2019', categories: ['eng'], roles: ['Engineer']},
							{year: '2018', categories: ['eng'], roles: ['Engineer']},
							{year: '2017', categories: ['eng'], roles: ['Engineer']},
							{year: '2016', categories: ['eng'], roles: ['Engineer']},
							{year: '2015', categories: ['eng'], roles: ['Engineer']}
						]
					},
					{
						name: 'Chris Hanel',
						handle: 'chrishanel',
						website: 'http://supportclass.net/',
						twitter: 'chrishanel',
						yearsInvolved: [
							{year: '2018', categories: ['eng'], roles: ['Website/Broadcast Designer']},
							{year: '2017', categories: ['eng'], roles: ['Website/Broadcast Designer']},
							{year: '2016', categories: ['eng'], roles: ['Website/Broadcast Designer']},
							{year: '2015', categories: ['eng'], roles: ['Website/Broadcast Designer']}
						]
					},
					{
						name: 'Mark Schwartzkopf',
						handle: 'mark_foundry',
						twitter: 'm_schwartzkopf',
						yearsInvolved: [
							{year: '2019', categories: ['eng', 'prod'], roles: ['Live Audio Lead']},
							{year: '2018', categories: ['eng', 'prod'], roles: ['Audio Engineer']}
						]
					},
					{
						name: 'Ryan Callard',
						handle: 'loris',
						email: 'ryancallardmusic@gmail.com',
						twitter: 'lor_is',
						yearsInvolved: [
							{year: '2019', categories: ['art', 'prod'], roles: ['Videographer']},
							{year: '2018', categories: ['art', 'prod'], roles: ['Videographer']}
						]
					},
					{
						name: 'Justin Kim',
						handle: 'justinkim',
						yearsInvolved: [
							{year: '2019', categories: ['eng', 'prod'], roles: ['Engineer', 'Technical Director']},
							{year: '2018', categories: ['eng', 'prod'], roles: ['Engineer']}
						]
					},
					{
						name: 'Jon Egeland',
						handle: 'faulty',
						twitter: 'amfaulty',
						yearsInvolved: [
							{year: '2019', categories: ['eng', 'prod'], roles: ['Engineer', 'Live Audio']}
						]
					},
					{
						name: 'George Wilson',
						handle: 'Oaked',
						yearsInvolved: [
							{year: '2019', categories: ['ops'], roles: ['Operations Assistant']}
						]
					},
					{
						name: 'Dan Radaj',
						handle: 'fendermcbender',
						twitter: 'fendermcbender',
						website: 'http://fender.space',
						yearsInvolved: [
							{year: '2019', categories: ['ops'], roles: ['Operations Assistant']}
						]
					},
					{
						name: 'Ethan Smith',
						handle: 'SoundSmith',
						twitter: 'soundsmithtf2',
						website: 'https://www.youtube.com/channel/UC0Eqb484X8EiNrFLSUQVsaA',
						yearsInvolved: [
							{year: '2019', categories: ['prod'], roles: ['Sound Design']}
						]
					},
					{
						name: 'Becky Verbruggen',
						handle: 'Ixy',
						twitter: 'theotherixy',
						yearsInvolved: [
							{year: '2019', categories: ['prod'], roles: ['Broadcast Director']}
						]
					},
					{
						name: 'Joshua Coffey',
						handle: 'Geel',
						twitter: 'geel9',
						website: 'http://scrap.tf',
						yearsInvolved: [
							{year: '2019', categories: ['prod'], roles: ['Engineer']}
						]
					},
					{
						name: 'Brennon Hook',
						handle: 'Bren',
						yearsInvolved: [
							{year: '2019', categories: ['talent'], roles: []},
							{year: '2018', categories: ['talent'], roles: []}
						]
					},
					{
						name: 'Justin Danford',
						handle: 'Bloodsire',
						twitter: 'thebloodsire',
						yearsInvolved: [
							{year: '2019', categories: ['talent'], roles: []}
						]
					},
					{
						name: 'Matt Dias',
						handle: 'clockwork',
						twitter: 'likeclockwork',
						yearsInvolved: [
							{year: '2019', categories: ['talent'], roles: []},
							{year: '2018', categories: ['talent'], roles: []}
						]
					},
					{
						name: 'Scott Kennedy',
						handle: 'Custa',
						twitter: 'Custa',
						yearsInvolved: [
							{year: '2019', categories: ['talent'], roles: []}
						]
					},
					{
						name: 'Mike Lockman',
						handle: 'Getawhale',
						twitter: 'Getawhale',
						yearsInvolved: [
							{year: '2019', categories: ['talent'], roles: []},
							{year: '2018', categories: ['talent'], roles: []}
						]
					},
					{
						name: 'Harsha Bandi',
						handle: 'Harsha',
						twitter: 'ggharsha',
						yearsInvolved: [
							{year: '2019', categories: ['talent'], roles: []},
							{year: '2018', categories: ['talent'], roles: []}
						]
					},
					{
						name: 'Jacob Lyon',
						handle: 'Jake',
						yearsInvolved: [
							{year: '2019', categories: ['talent'], roles: []}
						]
					},
					{
						name: 'Wyatt Smith',
						handle: 'Ma3laa',
						yearsInvolved: [
							{year: '2018', categories: ['talent'], roles: []}
						]
					},
					{
						name: 'Lauryn',
						handle: 'mala',
						twitter: 'mala_cookies',
						yearsInvolved: [
							{year: '2019', categories: ['talent'], roles: []},
							{year: '2018', categories: ['talent'], roles: []}
						]
					},
					{
						name: 'Brandon Larned',
						handle: 'Seagull',
						yearsInvolved: [
							{year: '2018', categories: ['talent'], roles: []}
						]
					},
					{
						name: 'Josh Wilkinson',
						handle: 'Sideshow',
						twitter: 'sideshowgaming',
						yearsInvolved: [
							{year: '2019', categories: ['talent'], roles: []},
							{year: '2018', categories: ['talent'], roles: []}
						]
					},
					{
						name: 'Steve Serge',
						handle: 'ster',
						twitter: 'sterlovesfood',
						yearsInvolved: [
							{year: '2018', categories: ['talent'], roles: []}
						]
					},
					{
						name: 'Austen Wade',
						handle: 'tagg',
						website: 'https://www.twitch.tv/thatguytagg',
						yearsInvolved: [
							{year: '2019', categories: ['art', 'talent'], roles: ['Post-Produced Content Lead']},
							{year: '2018', categories: ['talent'], roles: []}
						]
					},
					{
						name: 'raysfire',
						handle: 'raysfire',
						website: 'https://www.twitch.tv/raysfire',
						yearsInvolved: [
							{year: '2019', categories: ['talent'], roles: []},
							{year: '2018', categories: ['talent'], roles: []}
						]
					},
					{
						name: 'Dane Cook',
						handle: 'Uncle Dane',
						website: 'http://youtube.com/uncledane',
						yearsInvolved: [
							{year: '2019', categories: ['talent'], roles: []}
						]
					},
					{
						name: 'Timothy O.',
						handle: 'Tobiased',
						website: 'www.twitch.tv/tobiased_',
						twitter: '_Tobiased',
						yearsInvolved: [
							{year: '2019', categories: ['art'], roles: ['Lighting', 'Posters']}
						]
					},
					{
						name: 'Jonas Dödtmann',
						handle: 'Fames',
						twitter: '__Fames',
						yearsInvolved: [
							{year: '2019', categories: ['art'], roles: ['Lighting', 'Posters']}
						]
					},
					{
						name: 'Jacob R.',
						handle: 'Andobiki',
						twitter: 'andobiki',
						yearsInvolved: [
							{year: '2019', categories: ['art'], roles: ['2D Animation']}
						]
					},
					{
						name: 'Roniña R.',
						handle: 'Py-Bun',
						twitter: 'py_bun',
						yearsInvolved: [
							{year: '2019', categories: ['art'], roles: ['2D / SFM Animation']}
						]
					},
					{
						name: 'Aeon Bollig',
						handle: 'void',
						twitter: 'aeonbollig',
						website: 'aeonbollig.com',
						yearsInvolved: [
							{year: '2019', categories: ['art'], roles: ['Mapper']}
						]
					},
					{
						name: 'Liz Caingcoy',
						handle: 'liz',
						twitter: 'Liz_Caingcoy',
						website: 'https://www.youtube.com/user/callegosy',
						yearsInvolved: [
							{year: '2019', categories: ['art'], roles: ['Animation']}
						]
					},
					{
						name: 'Joel Ibbetson',
						handle: 'mittens',
						yearsInvolved: [
							{year: '2019', categories: ['art'], roles: ['Animation']}
						]
					},
					{
						name: 'Zeek',
						handle: 'Zir Zeek',
						yearsInvolved: [
							{year: '2019', categories: ['art'], roles: ['Animation']}
						]
					},
					{
						name: 'Joona H.',
						handle: 'Leg4Me',
						yearsInvolved: [
							{year: '2019', categories: ['art'], roles: ['Animation']}
						]
					},
					{
						name: 'Ryan Silver',
						handle: 'Marblr',
						yearsInvolved: [
							{year: '2019', categories: ['ops'], roles: ['Admin']}
						]
					},
					{
						name: 'Nick Harvey',
						handle: 'Nicktree',
						yearsInvolved: [
							{year: '2019', categories: ['ops'], roles: ['Admin']}
						]
					},
					{
						name: 'Borja Gutierrez',
						handle: 'SirVilleta',
						yearsInvolved: [
							{year: '2019', categories: ['thankee'], roles: ['Logo Designer']},
							{year: '2018', categories: ['thankee'], roles: ['Logo Designer']}
						]
					},
					{
						name: 'Jacko Brain',
						handle: 'omnibombulator',
						website: 'http://huds.tf',
						twitter: 'omnibombulator',
						youtube: 'omnibombulator',
						yearsInvolved: [
							{year: '2018', categories: ['thankee'], roles: ['TF2 HUD Designer']}
						]
					}]
				}
			};
		}

		_calcStaff(selected) {
			switch (selected) {
				case 0:
					return this.staff.filter(person => person.yearsInvolved.some(category => category.categories.some(x => x === 'ops')));
				case 1:
					return this.staff.filter(person => person.yearsInvolved.some(category => category.categories.some(x => x === 'eng')));
				case 2:
					return this.staff.filter(person => person.yearsInvolved.some(category => category.categories.some(x => x === 'prod')));
				case 3:
					return this.staff.filter(person => person.yearsInvolved.some(category => category.categories.some(x => x === 'art')));
				case 4:
					return this.staff.filter(person => person.yearsInvolved.some(category => category.categories.some(x => x === 'talent')));
				case 5:
					return this.staff.filter(person => person.yearsInvolved.some(category => category.categories.some(x => x === 'thankee')));
				default: return this.staff;
			}
		}

		_calcYear(person, selectedYear) {
			if (person.yearsInvolved.some(item => item.year === selectedYear)) {
				return true;
			}
		}

		_getCurrentRoles(person, selectedYear) {
			let roles = person.yearsInvolved.filter(item => item.year === selectedYear);
			if (roles[0]) {
				return roles[0].roles;
			}
		}
	}

	customElements.define(TothPageAbout.is, TothPageAbout);
})();
