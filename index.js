var home_page_template = `
	<div>
		<div class="ui segment header-v1">
			<h4>About Me</h4>
		</div>
		<p class="section-content">
			My name is Ryan Stamp and I am currently in my 3rd year at the University of Guelph pursuing a Bachelor of Computing with a Mathematics minor. 
			I choose my degree program because of my love of coding and my desire to become a better programmer. 
			What I love most about coding is how open-ended it is; the only limit to what you can create is your creativity. 
			As a very creative person, programming allows me to truly express myself.
		</p>
		<div class="ui segment header-v2">
			<h4>Interests</h4>
		</div>
		<p class="section-content">
			I try to dabble in as many different fields as I can, although my main interests lie in software security and game design. 
			Security is essential in today's industry and I find the techniques and practices that developers use to protect their data and code very interesting. 
			Game design is a very cool field; video games can create a unique experience that a lot of other mediums cannot. 
			So much creativity goes into making these virtual worlds, and as stated above, that's how I express myself. 
			I hope to someday make games that people will play and enjoy.
		</p>
		<div class="ui segment header-v1">
			<h4>Languages and Technologies</h4>
		</div>
		<table class="ui center aligned very basic table">
			<thead>
				<tr>
					<th>Language / Technology</th>
					<th>Experience</th>
				</tr>
			</thead>
			<tbody>
				<LanguageTableRow name="C" rating="5" preference="2" />
				<LanguageTableRow name="C#" rating="4" preference="5" />
				<LanguageTableRow name="C++" rating="3" preference="4" />
				<LanguageTableRow name="Java" rating="4" preference="3" />
				<LanguageTableRow name="Ruby" rating="2" preference="4" />
				<LanguageTableRow name="Ruby on Rails" rating="4" preference="5" />
				<LanguageTableRow name="HTML" rating="5" preference="3" />
				<LanguageTableRow name="CSS" rating="3" preference="2" />
				<LanguageTableRow name="JavaScript" rating="4" preference="4" />
				<LanguageTableRow name="PHP" rating="4" preference="4" />
				<LanguageTableRow name="SQL" rating="4" preference="4" />
				<LanguageTableRow name="Assembly" rating="3" />
				<LanguageTableRow name="Git" rating="4" />
			</tbody>
		</table>
	</div>
`;

var language_table_row_template =  `
	<tr>
		<td>{{name}}</td>
		<td>
			<div class="ui star rating" v-bind:data-rating="rating" data-max-rating="5"></div>
		</td>
	</tr>
`;

var project_page_template = `
	<div>
		<div class="ui blue inverted segment">
			<h4>Projects</h4>
		</div>
		<div class="section-content">
			<p>Below is a list of my personal projects. Use the buttons to view it on GitHub or visit the app.</p>
			<div class="ui fluid card">
				<div class="content header">
					<div class="right floated ui buttons">
						<a class="ui light grey icon button" href="https://github.com/mhogar/project-blog">
							<i class="github icon"></i>
						</a>
						<a class="ui light grey icon button" href="http://projectblog.ryanstamp.com">
							<i class="globe icon"></i>
						</a>
					</div>
					<div class="header">Project: Blog</div>
					<div>
						A blog style web application that allows you easily and effortlessly organize and share your projects with the community.
					</div>
				</div>
				<div class="content">
					<div class="ui sub header">Inspiration</div>
					<div class="description">
						Before making this app, I had only been working with a lot of system-based languages: C#, C++, etc. and I wanted to branch out and try a new field of computer science. 
						I wanted to dabble in web programming so choose Ruby on Rails as the framework because it is easy to learn and has a great community. 
						After working with Rails for a bit, I wanted to create a web app to showcase my skills. It was then that I realized that I could also use this web app to showcase some of my other projects. 
						So, I created Project: Blog, a web application that allows you to organize and share your projects.
					</div>
					<div class="ui sub header">Description</div>
					<div class="description">
						Each project you create has a description which can be rendered as markdown for more stylized descriptions. Projects can also have a link to some form of repository or maybe a website. 
						This allows readers to view more of the project or the source code if happens to be open source. The final part of a project is the language tags. 
						This allows readers to quickly learn what languages and technologies the app uses. On top of projects, each user can create a profile, so they can share with the community a little about themselves. 
						Profiles can be customized with profile preferences; these include making the profile private and using your real name as the display name. There are also a handful of admin features such as language creation for language tags.
					</div>
				</div>
				<div class="extra content">
					<div class="ui label light grey">Rails</div>
					<div class="ui label light grey">Ruby</div>
					<div class="ui label light grey">HTML</div>
					<div class="ui label light grey">CSS</div>
				</div>
			</div>
			<div class="ui fluid card">
				<div class="content header">
					<div class="right floated ui buttons">
						<a class="ui light grey icon button" href="https://github.com/mhogar/course-scheduler">
							<i class="github icon"></i>
						</a>
					</div>
					<div class="header">Course Scheduler</div>
					<div>
						A Windows form app that generates and displays all possible schedules for school classes given all the timeslots from each class.
					</div>
				</div>
				<div class="content">
					<div class="ui sub header">Inspiration</div>
					<div class="description">
						At the University of Guelph, courses are selected on a website called Web Advisor. On Web Advisor, you search for your desired courses and all the available time slots for all your courses are presented in a list. 
						The problem with this is there is no form of scheduler helper and trying to find a schedule that works manually is very tedious. I decided I needed a better solution, so I created an app to do it for me.
					</div>
					<div class="ui sub header">Description</div>
					<div class="description">
						In the app, you copy the text from the list in Web Advisor and paste it into a textbox. Then with the press of a button, the text is parsed, and all possible schedules are generated. 
						You can then step one by one through the schedules, deciding which ones you like and don't like. Each schedule is also presented as a graphical timetable to make visualizing it easier.
					</div>
				</div>
				<div class="extra content">
					<div class="ui label light grey">C#</div>
				</div>
			</div>
		</div>
	</div>
`;

var coop_page_template = `
	<div>
		<div class="ui blue inverted segment">
			<h4>Co-op Work Terms</h4>
		</div>
		<div class="section-content">
			<p>Below is a list of my past work terms. Click the item to view its co-op report.</p>
			<div class="ui large relaxed selection list">
			  	<a class="item" href="http://www.ryanstamp.com/CoopWebsite1">
				    <div class="content">
				      <div class="header">Camis - Summer (May to August) 2018</div>
				      <div class="description">Maintained Camis' older Everest software by fixing bugs, updating configuration, and implementing changes as per the clients' request.</div>
				    </div>
			  	</a>
			  	<a class="item" href="http://www.ryanstamp.com/CoopWebsite2">
				    <div class="content">
				      <div class="header">Tulip Retail - Fall (September to December) 2018</div>
				      <div class="description">Implemented new features for the clienteling app. Primarily worked on the back-end, creating endpoints and database migrations.</div>
				    </div>
			  	</a>
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
			template: home_page_template,
			components: {
				'LanguageTableRow': {
					props: ['name', 'rating', 'preference'],
					template: language_table_row_template
				}
			}
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
		},
		onPageSwitch: function() {
			if (this.page == 'home') {
				$('.ui.rating').rating('disable');
			}
		}
	},
	mounted: function() {
		this.onPageSwitch();
	}
});


