var App = {
	// Page functions section
	pages: {
		login: {
			/*
			* Check if user is logged in already, then update storage and route user to Accruals Log. Otherwise catch error
			* and notify user with message depending if they've logged out, their session expired, or if they've arrived to the login page
			*/
			onInit: function loginOnInit(data) {
				let previousaction = window.localStorage.getItem('previousaction');
				App.pages.login.render();
				if (previousaction === 'sessionexpired' || previousaction === 'loggedout')
					App.pages.login.checkPreviousAction();
			},
			
			/*
			* Check previous actions, render the according Alert message, and clear local storage
			*/
			checkPreviousAction: function() {
				let previousAction = window.localStorage.getItem('previousaction');
				let alertMsg = App.pages.getElement('alertMsg');
				
				switch(previousAction) {
					case 'sessionexpired':
						alertMsg.innerHTML = Templates.pages.login.renderAlertMsg('sessionExpired');
						break;
					case 'loggedout':
						alertMsg.innerHTML = Templates.pages.login.renderAlertMsg('success');
						break;
				}
				window.localStorage.clear();
			},
			
			/*
			* Render Login view
			*/
			render: function() {
				console.log('rendering login page');
				App.pages.getElement('main').innerHTML = Templates.pages.login.renderLogin();
				App.pages.getElement('loginButton').addEventListener('click', App.user.login);
				document.querySelector('#field_username').addEventListener('keyup', function(e) {
					let key = e.which || e.keyCode;
					if (key === 13) {
						App.user.login();
					}
				});
				document.querySelector('#field_password').addEventListener('keyup', function(e) {
					let key = e.which || e.keyCode;
					if (key === 13) {
						App.user.login();
					}
				});
			},
		},
		
		home: {
			onInit: () => {
				Router.navigate('#/home');
				App.pages.home.render();
			},
			render: () => {
				let pg = App.pages
				App.pages.getElement('main').innerHTML = Templates.pages.home.renderHome();
			},
			onCreate: () => {
				return 0;
			}
		},
		
		projects: {
			onInit: () => {
				return 0;
			},
			render: () => {
				return 0;
			},
			onCreate: () => {
				return 0;
			}
		},
		/*
		* Update local storage of previous action
		*/
		updatePreviousAction: function(previousAction) {
			window.localStorage.setItem('previousaction', previousAction);
		},
		getElement: function(id) {
			return document.getElementById(id);
		}
	}
}