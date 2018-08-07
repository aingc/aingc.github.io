/*
* Define routes for the app: #/, #/login, and #/approvals.
* On reach route call the page's respective onInit function
*/
Router.add({
	path: '#/',
	on: () => {
		App.pages.home.onInit(this.params);
	}
});

Router.add({
	path: '#/home',
	on: () => {
		App.pages.home.onInit(this.params);
	}
});

Router.add({
	path: '#/projects',
	on: () => {
		App.pages.projects.onInit(this.params);
	}
});


Router.init();