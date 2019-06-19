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
						name: 'Alex Van Camp',
						handle: 'Lange',
						website: 'http://alexvan.camp',
						email: 'lange@tipofthehats.org',
						twitter: 'vancamp',
						yearsInvolved: [
							{year: '2019', categories: ['prod', 'ops', 'eng'], role: 'Engineering Team Lead'},
							{year: '2018', categories: ['prod', 'ops', 'eng'], role: 'Executive Producer'},
							{year: '2017', categories: ['prod', 'ops', 'eng'], role: 'Executive Producer'},
							{year: '2016', categories: ['prod', 'ops', 'eng'], role: 'Executive Producer'},
							{year: '2015', categories: ['prod', 'ops', 'eng'], role: 'Executive Producer'},
							{year: '2014', categories: ['prod', 'ops', 'eng'], role: 'Executive Producer'},
							{year: '2013', categories: ['prod', 'ops', 'eng'], role: 'Executive Producer'}

						]
					},
					{
						name: 'Sean Stradley',
						handle: 'Seanbud',
						email: 'seanbud@tipofthehats.org',
						twitter: 'seanbud',
						yearsInvolved: [
							{year: '2019', categories: ['ops'], role: 'Co-Founder'},
							{year: '2018', categories: ['ops'], role: 'Co-Founder'},
							{year: '2017', categories: ['ops'], role: 'Co-Founder'},
							{year: '2016', categories: ['ops'], role: 'Co-Founder'},
							{year: '2015', categories: ['ops'], role: 'Co-Founder'},
							{year: '2014', categories: ['ops'], role: 'Co-Founder'},
							{year: '2013', categories: ['ops'], role: 'Co-Founder'}
						]
					},
					{
						name: 'Kurt Russ',
						handle: 'truktruk',
						email: 'kurt@tipofthehats.org',
						twitter: 'kurtisruss',
						yearsInvolved: [
							{year: '2019', categories: ['ops', 'talent', 'prod'], role: 'Co-Founder'},
							{year: '2018', categories: ['ops', 'talent', 'prod'], role: 'Co-Founder, Post-Produced Content'},
							{year: '2017', categories: ['ops', 'talent', 'prod'], role: 'Co-Founder'},
							{year: '2016', categories: ['ops', 'talent', 'prod'], role: 'Co-Founder'},
							{year: '2015', categories: ['ops', 'talent', 'prod'], role: 'Co-Founder'},
							{year: '2014', categories: ['ops', 'talent', 'prod'], role: 'Co-Founder'},
							{year: '2013', categories: ['ops', 'talent', 'prod'], role: 'Co-Founder'}
						]
					},
					{
						name: 'Jason Baxter',
						handle: 'whisker',
						email: 'jason@tipofthehats.org',
						twitter: 'rbjaxter',
						yearsInvolved: [
							{year: '2019', categories: ['ops'], role: 'Co-Founder'},
							{year: '2018', categories: ['ops'], role: 'Co-Founder'},
							{year: '2017', categories: ['ops'], role: 'Co-Founder'},
							{year: '2016', categories: ['ops'], role: 'Co-Founder'},
							{year: '2015', categories: ['ops'], role: 'Co-Founder'},
							{year: '2014', categories: ['ops'], role: 'Co-Founder'},
							{year: '2013', categories: ['ops'], role: 'Co-Founder'}
						]
					},
					{
						name: 'William Hild',
						handle: 'Auzzie',
						email: 'auzzie@tipofthehats.org',
						twitter: 'auzzietf2',
						yearsInvolved: [
							{year: '2019', categories: ['ops', 'prod'], role: 'Organizer'},
							{year: '2018', categories: ['ops'], role: 'Organizer'},
							{year: '2017', categories: ['ops'], role: 'Organizer'},
							{year: '2016', categories: ['ops'], role: 'Organizer'},
							{year: '2015', categories: ['ops'], role: 'Organizer'},
							{year: '2014', categories: ['ops'], role: 'Organizer'},
							{year: '2013', categories: ['ops'], role: 'Organizer'}
						]
					},
					{
						name: 'Jasmine Ho',
						handle: 'Jasbutts',
						email: 'jasbutts@tipofthehats.org',
						website: 'http://jasbutts.com/',
						twitter: 'miss_jasbutts',
						yearsInvolved: [
							{year: '2019', categories: ['ops', 'art'], role: 'Merch Coordinator & Artist'},
							{year: '2018', categories: ['ops', 'art'], role: 'Merch Coordinator & Artist'}
						]
					},
					{
						name: 'Anthony Oetzmann',
						handle: 'Airon',
						email: 'aironaudio@gmail.com',
						twitter: 'airont',
						website: 'http://aironaudio.weebly.com/',
						yearsInvolved: [
							{year: '2019', categories: ['prod'], role: 'Audio Engineer'},
							{year: '2017', categories: ['prod'], role: 'Audio Engineer'},
							{year: '2016', categories: ['prod'], role: 'Audio Engineer'},
							{year: '2015', categories: ['prod'], role: 'Audio Engineer'}
						]
					},
					{
						name: 'Ness Delacroix',
						handle: 'uberchain',
						website: 'http://uberchain.deviantart.com',
						twitter: 'uberchain',
						youtube: 'uberchainYT',
						yearsInvolved: [
							{year: '2019', categories: ['art'], role: 'SFM Lead'},
							{year: '2018', categories: ['art'], role: 'SFM Lead'},
							{year: '2017', categories: ['art'], role: 'SFM Lead'},
							{year: '2016', categories: ['art'], role: 'SFM Lead'},
							{year: '2015', categories: ['art'], role: 'SFM Lead'}
						]
					},
					{
						name: 'Ryan Heads',
						handle: 'Krunkidile',
						twitter: 'krunkidile',
						youtube: 'anangrysockpuppet',
						yearsInvolved: [
							{year: '2019', categories: ['art'], role: 'SFM Artist'},
							{year: '2018', categories: ['art'], role: 'SFM Artist'},
							{year: '2017', categories: ['art'], role: 'SFM Artist'},
							{year: '2016', categories: ['art'], role: 'SFM Artist'},
							{year: '2015', categories: ['art'], role: 'SFM Artist'}
						]
					},
					{
						name: 'SedimentarySocks',
						handle: 'SediSocks',
						yearsInvolved: [
							{year: '2019', categories: ['art'], role: '3D Modeler'},
							{year: '2018', categories: ['art'], role: '3D Modeler'},
							{year: '2017', categories: ['art'], role: '3D Modeler'},
							{year: '2016', categories: ['art'], role: '3D Modeler'},
							{year: '2015', categories: ['art'], role: '3D Modeler'}
						]
					},
					{
						name: 'Erin',
						handle: 'erynn',
						twitter: 'erynntf2',
						yearsInvolved: [
							{year: '2019', categories: ['eng'], role: 'Engineer'},
							{year: '2018', categories: ['eng'], role: 'Engineer'},
							{year: '2017', categories: ['eng'], role: 'Engineer'},
							{year: '2016', categories: ['eng'], role: 'Engineer'},
							{year: '2015', categories: ['eng'], role: 'Engineer'}
						]
					},
					{
						name: 'Chris Hanel',
						handle: 'chrishanel',
						website: 'http://supportclass.net/',
						twitter: 'chrishanel',
						yearsInvolved: [
							{year: '2019', categories: ['eng'], role: 'Website/Broadcast Designer'},
							{year: '2018', categories: ['eng'], role: 'Website/Broadcast Designer'},
							{year: '2017', categories: ['eng'], role: 'Website/Broadcast Designer'},
							{year: '2016', categories: ['eng'], role: 'Website/Broadcast Designer'},
							{year: '2015', categories: ['eng'], role: 'Website/Broadcast Designer'}
						]
					},
					{
						name: 'Mark Schwartzkopf',
						handle: 'mark_foundry',
						twitter: 'M_Schwartzkopf',
						yearsInvolved: [
							{year: '2019', categories: ['eng', 'prod'], role: 'Audio Engineer'},
							{year: '2018', categories: ['eng', 'prod'], role: 'Audio Engineer'}
						]
					},
					{
						name: 'Ryan Callard',
						handle: 'loris',
						email: 'ryancallardmusic@gmail.com',
						twitter: 'lor_is',
						yearsInvolved: [
							{year: '2019', categories: ['art', 'prod'], role: 'Videographer'},
							{year: '2018', categories: ['art', 'prod'], role: 'Videographer'}
						]
					},
					{
						name: 'Justin Kim',
						handle: 'justinkim',
						yearsInvolved: [
							{year: '2019', categories: ['eng', 'prod'], role: 'Engineer'},
							{year: '2018', categories: ['eng', 'prod'], role: 'Engineer'}
						]
					},
					{
						name: 'Brennon Hook',
						handle: 'Bren',
						yearsInvolved: [
							{year: '2018', categories: ['talent'], role: ''}
						]
					},
					{
						name: 'Matt Dias',
						handle: 'clockwork',
						yearsInvolved: [
							{year: '2018', categories: ['talent'], role: ''}
						]
					},
					{
						name: 'Mike Lockman',
						handle: 'Getawhale',
						yearsInvolved: [
							{year: '2018', categories: ['talent'], role: ''}
						]
					},
					{
						name: 'Harsha Bandi',
						handle: 'Harsha',
						yearsInvolved: [
							{year: '2018', categories: ['talent'], role: ''}
						]
					},
					{
						name: 'Wyatt',
						handle: 'Ma3la',
						yearsInvolved: [
							{year: '2018', categories: ['talent'], role: ''}
						]
					},
					{
						name: 'Lauran',
						handle: 'mala',
						yearsInvolved: [
							{year: '2018', categories: ['talent'], role: 'asdf'}
						]
					},
					{
						name: 'Brandon Larned',
						handle: 'Seagull',
						yearsInvolved: [
							{year: '2018', categories: ['talent'], role: ''}
						]
					},
					{
						name: 'Josh Wilkinson',
						handle: 'Sideshow',
						yearsInvolved: [
							{year: '2018', categories: ['talent'], role: ''}
						]
					},
					{
						name: 'Borja Gutierrez',
						handle: 'SirVilleta',
						yearsInvolved: [
							{year: '2019', categories: ['thankee'], role: 'Logo Designer'},
							{year: '2018', categories: ['thankee'], role: 'Logo Designer'}
						]
					},
					{
						name: 'Jacko Brain',
						handle: 'omnibombulator',
						website: 'http://huds.tf',
						twitter: 'omnibombulator',
						youtube: 'omnibombulator',
						yearsInvolved: [
							{year: '2019', categories: ['thankee'], role: 'TF2 HUD Designer'},
							{year: '2018', categories: ['thankee'], role: 'TF2 HUD Designer'}
						]
					}]
				}
			};
		}

		_calcStaff(selected) {
			switch (selected) {
				case 0: return this.staff;
				case 1:
					return this.staff.filter(person => person.yearsInvolved.some(category => category.categories.some(x => x === 'eng')));
				case 2:
					return this.staff.filter(person => person.yearsInvolved.some(category => category.categories.some(x => x === 'prod')));
				case 3:
					return this.staff.filter(person => person.yearsInvolved.some(category => category.categories.some(x => x === 'ops')));
				case 4:
					return this.staff.filter(person => person.yearsInvolved.some(category => category.categories.some(x => x === 'art')));
				case 5:
					return this.staff.filter(person => person.yearsInvolved.some(category => category.categories.some(x => x === 'talent')));
				case 6:
					return this.staff.filter(person => person.yearsInvolved.some(category => category.categories.some(x => x === 'thankee')));
				default: return this.staff;
			}
		}

		_calcYear(person, selectedYear) {
			if (person.yearsInvolved.some(item => item.year === selectedYear)) {
				return true;
			}
		}

		_getCurrentRole(person, selectedYear) {
			let role = person.yearsInvolved.filter(item => item.year === selectedYear);
			if (role[0]) {
				return role[0].role;
			}
		}
	}

	customElements.define(TothPageAbout.is, TothPageAbout);
})();
