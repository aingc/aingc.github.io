var Templates = {
	pages: {
		home: {
			renderHome: () => {
				return `
					<div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
						<nav class="uk-navbar-container" uk-navbar>
							<div class="uk-navbar-left">
								<ul class="uk-navbar-nav">
									<li class="uk-active"><a href="#">Home</a></li>
									<li><a href="#">Projects</a></li>
									<li><a href="#">Github</a></li>
									<li><a href="#">LinkedIn</a></li>
								</ul>
							</div>
						</nav>
					</div>
					
					<div class="uk-container">
						<h3><span class="icon ion-md-school"></span> Education</h3>
						<div class="uk-card uk-card-default left-border-emph-green panel card cardDefault">
							<div>
								<div class="cardBody">
									Portland State University (2016)
									<div class="pull-right">
										Bachelor of Science in Computer Science
									</div>
								</div>
							</div>
						</div>
						
						<h4>Relevant Classes</h4>
						
						<div class="uk-child-width-expand" uk-grid>
							<div>
								<div class="uk-card uk-card-default left-border-emph-green card cardDefault">
									<div class="cardHeading">
										<h5 class="cardTitle">Computer Science</h5>
									</div>
									<div class="cardBody">
										<ul class="cardList">
											<li>Discrete Data Structures (C++)</li>
											<li>Programming Systems (C++)</li>
											<li>Computational Structures</li>
											<li>Operating Systems (C)</li>
											<li>Algorithms & Complexity</li>
											<li>Language & Compiler Design (Java)</li>
											<li>Databases</li>
										</ul>
									</div>
								</div>
							</div>
							<div>
								<div class="uk-card uk-card-default left-border-emph-green card cardDefault">
									<div class="cardHeading">
										<h5 class="cardTitle">Science / Mathematics</h5>
									</div>
									<div class="cardBody">
										<ul class="cardList">
											<li>Calculus Series</li>
											<li>General Physics with Calculus</li>
											<li>Applied Differential Equations</li>
											<li>Chemistry</li>
											<li>Applied Linear Algebra</li>
										</ul>
									</div>
								</div>
							</div>
							<div>
								<div class="uk-card uk-card-default left-border-emph-green card cardDefault">
									<div class="cardHeading">
										<h5 class="cardTitle">Electives</h5>
									</div>
									<div class="cardBody">
										<ul class="cardList">
											<li>Computer Hardware</li>
											<li>Wireless Networking Protocols</li>
											<li>Open Source Software Development (JS)</li>
											<li>Computer Ethics</li>
											<li>Full Stack Web Development</li>
											<li>Philosophy</li>
											<li>Technical Writing</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						
						<h3><span class="icon ion-md-build"></span> Skills</h3>
						<div class="uk-child-width-expand" uk-grid>
							<div>
								<div class="uk-card uk-card-default left-border-emph-teal card cardDefault">
									<div class="cardHeading">
										<h5 class="cardTitle">Coding Language</h5>
									</div>
									<div class="cardBody">
										C, C++, Java, Python, HTML5, Javascript, PHP
									</div>
								</div>
							</div>
							<div>
								<div class="uk-card uk-card-default left-border-emph-teal card cardDefault">
									<div class="cardHeading">
										<h5 class="cardTitle">Persistent Storage</h5>
									</div>
									<div class="cardBody">
										PostgreSQL, MySQL, XML, JSON
									</div>
								</div>
							</div>
						</div>
						<div class="uk-child-width-expand" uk-grid>
							<div>
								<div class="uk-card uk-card-default left-border-emph-teal card cardDefault">
									<div class="cardHeading">
										<h5 class="cardTitle">Frameworks/Libraries</h5>
									</div>
									<div class="cardBody">
										Express, Socket, Bootstrap, Phaser, Meteor, Wordpress, React, Node, JQuery
									</div>
								</div>
							</div>
							<div>
								<div class="uk-card uk-card-default left-border-emph-teal card cardDefault">
									<div class="cardHeading">
										<h5 class="cardTitle">Tools</h5>
									</div>
									<div class="cardBody">
										GIT, npm, Linux, Unix, MS Winwdows, Gimp, MS Office, Webstorm, IntelliJ, Bash, Trello,
										Slack, Google Hangouts
									</div>
								</div>
							</div>
						</div>
						
						<h3><span class="icon ion-md-briefcase"></span> Experience</h3>
						<div>
							<div class="uk-card uk-card-default left-border-emph-green card cardDefault">
								<div class="cardHeading">
									<a href="https://github.com/CapstoneWebsite/CapstoneWebApplication" target="_blank">
										PSU CS Capstone Web Application
									</a> - PSU Capstone Project
									<div class="pull-right">
										<span class="icon ion-md-calendar"></span> March 2016 - September 2016
									</div>
								</div>
								<div class="cardBody">
									<p>Web Application to assist with the CS Capstone Program at Portland State University</p>
									<ul class="cardList">
										<li>Learned new framework (Meteor) and library (React) to use for the project</li>
										<li>
											Worked on front-end view/submission forms for the Student Dashboard including resume
											and 360 reviews that the Student has done or not done for their teammates
										</li>
										<li>Used Trello to assign tasks to team members and organize them through Agile methodology</li>
									</ul>
								</div>
							</div>
						</div>
						
					</div>
				`
			}
		},
		projects: {
		}
	}
}