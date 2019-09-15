var home_page_template = `
	<div>
		<SectionHeaderComponent :version="1" :text="'About Me'" />
		<p class="section-content">
			My name is Ryan Stamp and I am currently in my 4th year at the University of Guelph pursuing a Bachelor of Computing with a Mathematics minor. 
			I choose my degree program because of my love of coding and my desire to become a better programmer. 
			What I love most about coding is how open-ended it is; the only limit to what you can create is your creativity. 
			As a very creative person, programming allows me to truly express myself.
		</p>
		<SectionHeaderComponent :version="2" :text="'Interests'" />
		<p class="section-content">
			I try to dabble in as many different fields as I can, although my main interests lie in software security and game design. 
			Security is essential in today's industry and I find the techniques and practices that developers use to protect their data and code very interesting. 
			Game design is a very cool field; video games can create a unique experience that a lot of other mediums cannot. 
			So much creativity goes into making these virtual worlds, and as stated above, that's how I express myself. 
			I hope to someday make games that people will play and enjoy.
		</p>
		<SectionHeaderComponent :version="1" :text="'Languages and Technologies'" />
		<table class="ui center aligned very basic table">
			<thead>
				<tr>
					<th>Language / Technology</th>
					<th>Experience</th>
				</tr>
			</thead>
			<tbody>
				<LanguageTableRowComponent name="C" rating="5" preference="2" />
				<LanguageTableRowComponent name="C#" rating="4" preference="5" />
				<LanguageTableRowComponent name="C++" rating="4" preference="4" />
				<LanguageTableRowComponent name="Java" rating="4" preference="3" />
				<LanguageTableRowComponent name="Ruby" rating="2" preference="4" />
				<LanguageTableRowComponent name="Ruby on Rails" rating="4" preference="5" />
				<LanguageTableRowComponent name="HTML" rating="5" preference="3" />
				<LanguageTableRowComponent name="CSS" rating="3" preference="2" />
				<LanguageTableRowComponent name="JavaScript" rating="4" preference="4" />
				<LanguageTableRowComponent name="PHP" rating="4" preference="4" />
				<LanguageTableRowComponent name="SQL" rating="4" preference="4" />
				<LanguageTableRowComponent name="Assembly" rating="3" />
				<LanguageTableRowComponent name="Git" rating="4" />
			</tbody>
		</table>
	</div>
`; 

var project_page_template = `
	<div>
		<div class="section-content">
			<p>Below is a list of my personal projects. Use the buttons to view it on GitHub or visit the app.</p>
			<div v-for="(projectCard, index) in projectCards" :key="index">
				<ProjectCardComponent :version="(index % 2) + 1" :options="projectCard" />
				<br />
			</div>
		</div>
	</div>
`;

var coop_page_template = `
	<div>
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
        <a class="item" href="http://www.ryanstamp.com/CoopWebsite3">
          <div class="content">
            <div class="header">Natural Resources Canada - Summer (May to August) 2019</div>
            <div class="description">Developed solutions from scratch to convert 3D geological datasets into the 3D Tiles formats. These new tiles were then rendered on the web using the CesiumJS JavaScript library.</div>
          </div>
        </a>
			</div>
		</div>
	</div>
`;

var sectionHeaderComponent = {
	props: ['version', 'text'],
	template: `
	<div class="ui raised segments">
		<div :class="'ui segment header-v' + version">
			<h4>{{text}}</h4>
		</div>
	</div>
	`
};

var languageTableRowComponent = {
	props: ['name', 'rating', 'preference'],
	template: `
		<tr>
			<td>{{name}}</td>
			<td>
				<div class="ui star rating" v-bind:data-rating="rating" data-max-rating="5"></div>
			</td>
		</tr>
	`
}

var projectCardComponent = {
	props: ['version', 'options'],
	template: `
	<div class="ui fluid raised card">
		<div :class="'content header v' + version">
			<div class="project card header">{{options.name}}</div>
			<div>{{options.headerText}}</div>
		</div>
		<div class="content">
			<a v-if="options.github" class="ui icon button" :href="options.github">
				<i class="github icon"></i> View it on Github
			</a>
			<a v-if="options.website" class="ui icon button" :href="options.website">
				<i class="globe icon"></i> View the App
			</a>
		</div>
		<div class="content">
			<div class="ui sub header">Inspiration</div>
			<div class="description">{{options.inspiration}}</div>
			<div class="ui sub header">Description</div>
			<div class="description">{{options.description}}</div>
		</div>
		<div class="extra content">
			<div class="ui label light grey" v-for="(langTag, index) in options.langTags" :key="index">{{langTag}}</div>
		</div>
	</div>
	`
}

var vue = new Vue({
	el: '#page',
	data: {
		page: 'home'
	},
	components: {
		'home': {
			template: home_page_template,
			components: {
				SectionHeaderComponent: sectionHeaderComponent,
				LanguageTableRowComponent: languageTableRowComponent
			}
		},
		'projects': {
			data: function() {
				return {
					projectCards: [
						{
							github: "https://github.com/mhogar/StudentsToolshed",
							website: "https://mhogar-students-toolshed.herokuapp.com",
							name: "Student's Toolshed",
							headerText: "A collection of small, useful apps all on one website.",
							inspiration: "I would often have ideas for small, but useful apps and I would get very excited and motivated to start working on them. However, more often then not, I would quickly lose that motivation once I realized just how much background work it would take just to get the app to even run. There's a database and API to set up, authentication, hosting, etc. For how small the app was, it just didn't seem worth it. Eventually, I came up with the idea to create a web app that was a collection of all these app ideas. That way, I only had to do the background work once, and all the apps could tap into the same resources.",
							description: "ST itself acts as a container for the other apps. It is written in Ruby on Rails and provides the API and database structure, authentication, routing, and things like that. ST doesn't have much a front-end, but simply provides links to the homepages of its sub apps. These sub-apps are written in JavaScript and run on a single page. They are self-contained, but still have access to ST global data, such as the users. This creates a very intuitive way to add new apps to ST as I get new ideas. At the moment, there is only a single app, a Task Tracker to help organize your projects, although I do have a list of app ideas that I am hoping to add in the future.",
							langTags: ["Rails", "Ruby", "HTML", "CSS", "JavaScript", "Vue.js"]
						},
						{
							github: "https://github.com/mhogar/project-blog",
							website: "https://mhogar-project-blog.herokuapp.com",
							name: "Project: Blog",
							headerText: "A blog style web application that allows you easily and effortlessly organize and share your projects with the community.",
							inspiration: "Before making this app, I had only been working with a lot of system-based languages: C#, C++, etc. and I wanted to branch out and try a new field of computer science. I wanted to dabble in web programming so choose Ruby on Rails as the framework because it is easy to learn and has a great community. After working with Rails for a bit, I wanted to create a web app to showcase my skills. It was then that I realized that I could also use this web app to showcase some of my other projects. So, I created Project: Blog, a web application that allows you to organize and share your projects.",
							description: "Each project you create has a description which can be rendered as markdown for more stylized descriptions. Projects can also have a link to some form of repository or maybe a website. This allows readers to view more of the project or the source code if happens to be open source. The final part of a project is the language tags. This allows readers to quickly learn what languages and technologies the app uses. On top of projects, each user can create a profile, so they can share with the community a little about themselves. Profiles can be customized with profile preferences; these include making the profile private and using your real name as the display name. There are also a handful of admin features such as language creation for language tags.",
							langTags: ["Rails", "Ruby", "HTML", "CSS"]
						},
						{
							github: "https://github.com/mhogar/course-scheduler",
							name: "Course Scheduler",
							headerText: "A Windows form app that generates and displays all possible schedules for school classes given all the timeslots from each class.",
							inspiration: "At the University of Guelph, courses are selected on a website called Web Advisor. On Web Advisor, you search for your desired courses and all the available time slots for all your courses are presented in a list. The problem with this is there is no form of scheduler helper and trying to find a schedule that works manually is very tedious. I decided I needed a better solution, so I created an app to do it for me.",
							description: "In the app, you copy the text from the list in Web Advisor and paste it into a textbox. Then with the press of a button, the text is parsed, and all possible schedules are generated. You can then step one by one through the schedules, deciding which ones you like and don't like. Each schedule is also presented as a graphical timetable to make visualizing it easier.",
							langTags: ["C#"]
						}
					]
				}
			},
			components: {
				SectionHeaderComponent: sectionHeaderComponent,
				ProjectCardComponent: projectCardComponent
			},
			template: project_page_template
		},
		'coop': {
			components: {
				SectionHeaderComponent: sectionHeaderComponent
			},
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
