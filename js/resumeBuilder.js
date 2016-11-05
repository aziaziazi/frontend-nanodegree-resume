var bio = {
  "name" : "Camille Gabrieli",
  "role" : "Web Developer",
  "contact" : {
    "mobile" : "0032 491 528 267",
    "email" : "camille.gabrieli@gmail.com",
    "twitter" : "@CamilleGabrieli",
    "linkedin" : "camille-gabrieli",
    "github" : "aziaziazi",
    "location" : "Brussels"
  },
  "biopic" : "images/me.jpg",
  "welcomeMessage" : "Hi! Tell me what you think about my resume!",
  "skills" : ["Product & Graphic Design", "Web Developement", "Experiemental Cooking"]
};

var work = {
  "jobs" : [
    {
      "employer" : "Le Pantin",
      "title" : "Barman",
      "dates" : "2014 > Currently",
      "location" : "Ixelles",
      "description" : "Web & Print communication: Website updating (wordpress), Menu, "+
                      "posters and flyers design. Creation and maintaining the roof vegetable "+
                      "garden in companion planting."
    },
    {
      "employer" : "Freelance",
      "title" : "Designer",
      "dates" : "2013 > Currently",
      "location" : "Bruxelles",
      "description" : "Design of maps of cities and train stations including amenities of the "+
                      "station, public transportations and cities facilities.Creation of my own "+
                      "scripts on Illustrator and Google Sheets to automate the repetitives tasks."
    },
    {
      "employer" : "AREP",
      "title" : "Designer",
      "dates" : "2009 > 2012",
      "location" : "Paris",
      "description" : "TSubsidiary of SNCF Gares & Connexions, AREP is a multi-disciplinary "+
                      "laboratory for urban area on the move: work with architects, building "+
                      "engineers and urban planners on projects for transportations spaces. "+
                      "Key achievements:"+
                      "/ 10 years prospective for points of sale"+
                      "/ Urban furniture & bike sharing stations"+
                      "/ Multimodal signage"+
                      "/ Interior/exterior bulding and public amenities modelling"+
                      "/ User flow studies for rolling stocks"+
                      "/ Improvement of a modular sustainable passenger ecoshelter and its nomenclature"+
                      "/ Elaboration of working drawings and coordination for tenders"
    }
  ]
};

// TODO: add urls to projects
// TODO: add bullets points to projects (and to work/education ?)
var project = {
  "projects" : [
    {
      "title" : "Co-Learning Meetups",
      "date" : "2015 > Currently",
      "description" : "Organiser of a weekly programing event gathering tech newbies and ninja "+
                      "devs in a friendly atmosphere.",
      "image" : [ "images/197x148.gif" ]
    },
    {
      "title" : "VR Hardware Workshop",
      "date" : "2016",
      "description" : "Coaching for a workshop during European Maker Week where participants "+
                      "were invited to design and create virtual reality hardware.",
      "image" : [ "images/197x148.gif" ]
    },
    {
      "title" : "MolenGeek Hackaton",
      "date" : "2016",
      "description" : "Development of a bot to help peoples in Emergency and unclog the 112 "+
                      "calling center. .",
      "image" : [ "images/197x148.gif" ]
    },
    {
      "title" : "MarioKart Web Contoller",
      "date" : "2016",
      "description" : "Create a controler that allow you to play MarioKart64 in a browser with "+
                      "your smartphone as a controler.",
      "image" : [ "images/197x148.gif" ]
    },
    {
      "title" : "Lasercuted Camera",
      "date" : "2013 > 2014",
      "description" : "Cardboard kit allowing you to mount an e cient analog pinhole camera. "+
                      "I focussed on the usability with a easy-to-mount design, load and use.",
      "image" : [ "images/197x148.gif" ]
    }
  ]
};

var education = {
  "schools" : [
    {
      "name" : "École Boulle",
      "degree" : "Diplôme des Métiers d'Art",
      "dates" : "2007 > 2009",
      "location" : "Paris",
      "major" : [ "Ébénisterie" ],
      "url" : "http://www.ecole-boulle.org/"

    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front End Web Dev",
      "school" : "Udacity",
      "dates" : "2016 > 2017",
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title" : "Intro to Programming",
      "school" : "Udacity",
      "dates" : "2015 > 2016",
      "url" : "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }
  ]
};

function displayBio() {
  $("#header").prepend(HTMLbioPic.replace("%data%", bio.biopic));
  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

  // Use of JQuery.each() because "contact" is an object and forEach would be error prone.
  $.each(bio.contact, function(contactType, contactData){
    $("#topContacts").append(HTMLcontactGeneric.replace("%data%", contactData)
      .replace("%contact%", contactType));
  });

  if (bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    // use of JQuery.each() to match the above loop. forEach would also work well.
    $.each(bio.skills, function(i, skill){
      $("#header").append(HTMLskills.replace("%data%", skill));
  })};
}

function displayWork() {
  // Vanilla forEach works well ! JQuery.each() could also work fine.
  work.jobs.forEach(function(job){
    $("#workExperience").append(HTMLworkStart);

    $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", job.employer));
    // TODO: replace "> a" with an id selector - and refactor helper.js
    $(".work-entry:last > a").append(HTMLworkTitle.replace("%data%", job.title));
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
  });
}

displayBio();
displayWork();