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
						<div class="left-border-emph-green panel card cardDefault">
							<div>
								<div class="uk-card uk-card-default uk-card-body cardBody">
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
										</ul>
									</div>
								</div>
							</div>
							<div>
								<div class="uk-card uk-card-default uk-card-body left-border-emph-green panel">Item</div>
							</div>
							<div>
								<div class="uk-card uk-card-default uk-card-body left-border-emph-green panel">Item</div>
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