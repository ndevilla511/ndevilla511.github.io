//Project Details Reveal//

var projectsList = {
    videoPlayer: {
        title: "Custom HTML5 Video Player",
        description: "I built this custom video player with pure vanilla JavaScript and the HTML5 Media API. The transcript under the video player will highlight its sentences as the video progresses. The user can also click on any sentence in the transcript and the video will scrub to the appropriate time.",
        githubLink: "https://github.com/ndevilla511/Project-7---Interactive-Video-Player/",
        siteLink: "http://ndevilla511.github.io/Project-7---Interactive-Video-Player/"
    },
    imageGallery: {
        title: "Image Gallery",
        description: "In this project, I created a photo gallery with added interactivity using jQuery. When the user clicks on a thumbnail, a lightbox will appear and display a larger version of the image and a caption underneath. I also added a search bar at the top which allows the user to filter through the photos using search terms.",
        githubLink: "https://github.com/ndevilla511/Project-4---Interactive-Photo-Gallery",
        siteLink: "http://ndevilla511.github.io/Project-4---Interactive-Photo-Gallery/"
    },
    apiGallery: {
        title: "Spotify API Album Gallery",
        description: "I built this album gallery utilizing AJAX. All the data about album thumbnails, album art, track lists, and artists is pulled from Spotify using AJAX calls to Spotify's public API and is displayed in the lightbox featured in the image gallery project.",
        githubLink: "https://github.com/ndevilla511/Project-10---Public-API-Gallery",
        siteLink: "http://ndevilla511.github.io/Project-10---Public-API-Gallery/"
    },

    dashboard: {
        title: "Web App Dashboard",
        description: "For this project, I used many techniques in HTML, CSS and JavaScript to create a fully responsive dashboard. While there isn't any database or backend functionality for the web app, this showcases my ability to build projects from scratch from the ground up. I implemented the Chart.js library for the graphs and added my own custom mobile menu with jQuery.",
        githubLink: "https://github.com/ndevilla511/Project-9---Web-App-Dashboard",
        siteLink: "http://ndevilla511.github.io/Project-9---Web-App-Dashboard/"
    },
    sassRefactor: {
        title: "Refactoring CSS to Sass",
        description: "This project showcases my ability to take the CSS of an existing site and refactor it into Sass. I broke the CSS up into several SCSS partial files and employed Sass techniques like using variables, mixins, and extends. This project also demonstrates that I can build sites with a responsive layout using CSS flexbox techniques.",
        githubLink: "https://github.com/ndevilla511/Project-5---CSS-to-Sass",
        siteLink: "http://ndevilla511.github.io/Project-5---CSS-to-Sass/"
    },
    siteOptimization: {
        title: "Performance Optimization",
        description: "Here, I took a mock photography site that was initially over 11MB in size with 43 HTTP requests and reduced it to just over 6KB with 22 HTTP requests. I was able to do this by optimizing the site's image files, replacing any icon image files with svgs, and replacing font files with fonts supplied on Google Fonts. In addition, I also implemented the gulp.js taskrunner to combine and minify JavaScript and CSS files, as well as automate the site production process.",
        githubLink: "https://github.com/ndevilla511/Project-11---Performance-Optimization",
        siteLink: "http://ndevilla511.github.io/Project-11---Performance-Optimization/"
    },
    attainr: {
        title: "Goal Setting/Tracking Web App",
        description: "I built this goal setting and tracking single-page web application using AngularJS. I set up different views for the login, sign up, and goal timeline. Users can make and update goals in real time. This app also utilizes momentjs for time manipulation, Bootstrap, and Google's Firebase service for the backend.",
        githubLink: "https://github.com/ndevilla511/attainr",
        siteLink: "http://ndevilla511.github.io/attainr"
    },
    quoteGenerator: {
        title: "Quote Generator",
        description: "I built this goal setting and tracking single-page web application using AngularJS. I set up different views for the login, sign up, and goal timeline. Users can make and update goals in real time. This app also utilizes momentjs for time manipulation, Bootstrap, and Google's Firebase service for the backend.",
        githubLink: "https://github.com/ndevilla511/quote-generator",
        siteLink: "http://ndevilla511.github.io/quote-generator"
    }


};

var $overlay = $('<div id="overlay" class="close"></div>');
var $projectLightbox = $('<div id="lightbox"></div>');
var $projectTitle = $('<h2 id="project-title"></h2>');
var $projectInfo = $('<p id="project-description"></p>');
var $projectImage = $('<img class="project-screenshot">');
var $projectGithub = $('<a id="github-link" class="lightbox-link">View on Github</a>');
var $projectSite = $('<a id="project-site" class="lightbox-link">Go to Project Site</a>');
var $back = $('<a id="back" class="close">&#10060;</a>');


//Append the lightbox elements into the lightbox and append the lightbox to the overlay, which is appended to the body
$projectLightbox.append($projectTitle).append($back).append($projectImage).append($projectInfo).append($projectSite).append($projectGithub);
$overlay.append($projectLightbox);
$('body').append($overlay);

//Clicking on the project thumbnail will make the overlay fade in and populate its elements with data from the projectsList Object
$(".project-thumbnail").click(function() {
    var project = $(this).data().projectName;
    console.log(project);
    $overlay.fadeIn(200);
    $('body').css('overflow-y', 'hidden');
    $projectTitle.text(projectsList[project].title);
    $projectImage.attr('src', 'img/' + project + '.png');
    $projectInfo.text(projectsList[project].description);
    $projectGithub.attr('href', projectsList[project].githubLink);
    $projectSite.attr('href', projectsList[project].siteLink);
});

//Clicking the overlay or the x in the corner will close the lightbox and hide the overlay
$(".close").click(function(e) {
    $('body').css('overflow-y', 'auto');
    //this if conditional prevents the click event from activating on any of the overlay div's children (except for the x)
    if (e.target === this) {
        $overlay.fadeOut(200, function() {
            $projectImage.attr('src', '');
            $(".lightbox-link").attr('href', "");
            $("#project-title, #project-description").empty();
        });
    }
});


////////////Mobile Menu/////////////

var $navicon = $('.navicon');
var $navMenu = $('#nav-menu-container');

//click event that toggles the exit-mobile class for the navicon and the mobile-menu-on class for the navigation menu and slides it down
$navicon.click(function() {
    $navicon.toggleClass('exit-mobile');
    $navMenu.slideToggle().toggleClass('mobile-menu-on');
});

//when the window resizes
$(window).resize(function() {
    //if the window is more than 768 pixels wide
    if ($(window).width() > 768) {
        //remove the exit-mobile class from the navicon
        $navicon.removeClass('exit-mobile');
        //slide the navigation menu down
        $navMenu.slideDown();
        //else if the window is less than 768 pixels wide and the navicon doesn't have the class exit mobile
    } else if($(window).width() < 768 && !$navicon.hasClass('exit-mobile')) {
        //slide the navmenu up
        $navMenu.slideUp();
    }
});


///////Scrolling////////

var $navLink = $(".navlink");

$navLink.click(function() {
    var scrollValue = $(this).data().scrollLocation;
    console.log($(this).text());
    $.scrollTo($("." + scrollValue +":eq(0)"), 500);
    if (($(this).text() !== 'View My Projects' && $(this).text() !== 'Contact Me') && $(window).width() < 768) {
        $navicon.toggleClass('exit-mobile');
        $navMenu.slideToggle().toggleClass('mobile-menu-on');
    }
});

var a = $('.portfolio').position()['top'];

function highLightNav() {
    $('.navlink').removeClass('current');
    var scrollPosition = window.scrollY;
    if (scrollPosition < $('.portfolio').position()['top']) {
        $('.navlink:eq(0)').addClass('current');
        if ($(window).width() < 768) {
            $navicon.removeClass('exit-mobile');
            $navMenu.slideUp().removeClass('mobile-menu-on');
        }
    } else if (scrollPosition >= $('.portfolio').position()['top'] && scrollPosition < $('.about').position()['top']) {
        $('.navlink:eq(1)').addClass('current');
    } else if (scrollPosition >= $('.about').position()['top'] && scrollPosition < ($('.contact').position()['top'] - 200)) {
        $('.navlink:eq(2)').addClass('current');
    } else if (scrollPosition >= ($('.contact').position()['top'] - 200)) {
        $('.navlink:eq(3)').addClass('current');
    }
}

$(document).scroll(function(){
    if($(this).scrollTop() >= a)
    {
        $('#navigation').css({"background":"rgba(0,0,0,.8)"});
    } else {
        $('#navigation').css({"background":"transparent"});
    }
});

$(window).scroll(function() {
    highLightNav();
});

$(window).load(function() {
    highLightNav();
    console.log("done");
});

//Parallax settings

$('header').parallax({imageSrc: 'img/headerbackground2.png', speed: '0.2'});
$('.about').parallax({imageSrc: 'img/aboutbackground.jpg', speed: '0.2', position: 'top left'});

