$(document).ready(function() {
	//$('#menu-bar').sticky();
});

var home_page_template = `
	<div>
		<div class="ui blue inverted segment">
			<h3>About Me</h3>
		</div>
		<p class="section-content">
			My name is Ryan Stamp and I am currently in my 3rd year at the University of Guelph pursuing a Bachelor of Computing with a Mathematics minor. 
			I choose my degree program because of my love of coding and my desire to become a better programmer. 
			What I love most about coding is how open-ended it is; the only limit to what you can create is your creativity. 
			As a very creative person, programming allows me to truly express myself.
		</p>
		<div class="ui blue inverted segment">
			<h3>Interests</h3>
		</div>
		<p class="section-content">
			I try to dabble in as many different fields as I can, although my main interests lie in software security and game design. 
			Security is essential in today's industry and I find the techniques and practices that developers use to protect their data and code very interesting. 
			Game design is a very cool field; video games can create a unique experience that a lot of other mediums cannot. 
			So much creativity goes into making these virtual worlds, and as stated above, that's how I express myself. 
			I hope to someday make games that people will play and enjoy.
		</p>
	</div>
`;

var project_page_template = `
	<p>Projects</p>
`;

var coop_page_template = `
	<div>
		<div class="ui blue inverted segment">
			<h3>Co-op Work Terms</h3>
		</div>
		<div class="section-content">
			<p>Below is a list of my past work terms. Click the link to view its co-op report.</p>
			<div class="ui large relaxed list">
			  	<div class="item">
				    <div class="content">
				      <a class="header" href="https://mhogar.github.io/CoopWebsite">Camis - Summer (May to August) 2018</a>
				      <div class="description">Maintained Camis' older Everest software by fixing bugs, updating configuration, and implementing changes as per the clients' request.</div>
				    </div>
			  	</div>
			  	<div class="item">
				    <div class="content">
				      <a class="header" href="https://mhogar.github.io/CoopWebsite2">Tulip Retail - Fall (September to December) 2018</a>
				      <div class="description">Implemented new features from a specification. Primarily worked on the back-end, creating REST endpoints and database migrations.</div>
				    </div>
			  	</div>
			</div>
		</div>
	</div>
`;

var vue = new Vue({
	el: '#page',
	data: {
		page: 'home'
	},
	components: {
		'home': {
			template: home_page_template
		},
		'projects': {
			template: project_page_template
		},
		'coop': {
			template: coop_page_template
		}
	},
	methods: {
		menuItemClicked: function(page) {
			this.page = page;

			//unselect all menu items then select the clicked one
			['home', 'projects', 'coop'].forEach((item) => $('#' + item + '-item').removeClass('active'));
			$('#' + page + '-item').addClass('active');
		}
	}
});


