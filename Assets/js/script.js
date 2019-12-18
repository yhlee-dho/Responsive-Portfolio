// img with attr src="Assets/Images/moviesAndGroovies.png" class="card-img-top" alt="Movies and Groovies"
// $(".nav-item").on("click").activeList();


// Nav bar Active
function activeAboutMe () {
    removeActiveList();
    var element = document.getElementById("aboutMeNav");
    element.classList.add("active");
}

function activePortfolio () {
    removeActiveList();
    var element = document.getElementById("portfolioNav");
    element.classList.add("active");
}

function activeGithub () {
    removeActiveList();
    var element = document.getElementById("githubNav");
    element.classList.add("active");
}

function activeContactMe () {
    removeActiveList();
    var element = document.getElementById("contactMeNav");
    element.classList.add("active");
}

function removeActiveList () {
    var rmAboutMeNav = document.getElementById("aboutMeNav");
    rmAboutMeNav.classList.remove("active");
    var rmPortfolioNav = document.getElementById("portfolioNav");
    rmPortfolioNav.classList.remove("active");
    var rmGithubNav = document.getElementById("githubNav");
    rmGithubNav.classList.remove("active");
    var rmContactMeNav = document.getElementById("contactMeNav");
    rmContactMeNav.classList.remove("active");
}


// Portfolio Selection

let projects = [
    mooviesGroovies= {
        title: "Movies & Groovies",
        discription: "Nearby movie query searh of movieglu API followed by google map routing." ,
        imgSource: "Assets/Images/moviesAndGroovies.png" ,
        imgAlt: "Moovies and Groovies",
        gitPage: "https://yhlee-dho.github.io/Movies-And-Groovies/"
    },

    weatherDashboard= {
        title: "Weather Dashboard",
        discription: "Weather condition display with user input of target location." ,
        imgSource: "Assets/Images/weatherDashboard.png" ,
        imgAlt: "Weather Dashboard",
        gitPage: "https://yhlee-dho.github.io/Server-Side-APIs-Weather-Dashboard/"
    },

    workDayPlanner= {
        title: "Work Day Planner",
        discription: "Hourly scheduling per work-day with save and delete function for tasks." ,
        imgSource: "Assets/Images/workDayPlanner.png" ,
        imgAlt: "Work Day Planner",
        gitPage: "https://yhlee-dho.github.io/Third-Party-APIs-Day-Planner/"
    },

    codeQuiz= {
        title: "Code Quiz",
        discription: "Basic quiz app with timer." ,
        imgSource: "Assets/Images/codeQuiz.png" ,
        imgAlt: "Moovies and Groovies",
        gitPage: "https://yhlee-dho.github.io/Web-APIs-Code-Quiz/"
    },

    passwordGenerator= {
        title: "Password Generator",
        discription: "Basic random string generator." ,
        imgSource: "Assets/Images/passwordGenerator.png" ,
        imgAlt: "Password Generator",
        gitPage: "https://yhlee-dho.github.io/Password-Generator/"
    },
];


function activeMoviesGroovies () {
    removeActivePortfolio();
    var element = document.getElementById("moviesGroovies");
    element.classList.add("active");

    
    let portEl = $("<div>").attr("class", "card mb-3").attr("style", "width: 100%;");
    let divEl = $("<div").attr("class", "row no-gutters");
    let cardEl = $("<div>").attr("class", "col-md-4");
    let cardImageEl = $("<img>").attr("src", `${projects.mooviesGroovies.imgSource}`).attr("class", "card-img").attr("alt", `${projects.mooviesGroovies.imgAlt}`);

    let bodyDivEl = $("<div").attr("class", "col-md-8");
    let bodyCardEl = $("<div>").attr("class", "card-body");
    let cardTitleEl = $("<h5>").attr("class", "card-title");
    let cardTextEl = $("<p>").attr("class", "card-text");

    portEl.append(divEl);
    divEl.append(cardBodyEl).append(cardImageEl);
    $("portfolioDisplay").append(portEl);



// Create Card for Portfolio
{/* <div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="..." class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> */}

}

function activeWeatherDashboard () {
    removeActivePortfolio();
    var element = document.getElementById("weatherDashboard");
    element.classList.add("active");
}

function activeWorkDayPlanner () {
    removeActivePortfolio();
    var element = document.getElementById("workDayPlanner");
    element.classList.add("active");
}

function activeCodeQuiz () {
    removeActivePortfolio();
    var element = document.getElementById("codeQuiz");
    element.classList.add("active");
}

function activePasswordGenerator () {
    removeActivePortfolio();
    var element = document.getElementById("passwordGenerator");
    element.classList.add("active");
}

function removeActivePortfolio () {
    $("#portfolioDisplay").empty();
    var rmMoviesGroovies = document.getElementById("moviesGroovies");
    rmMoviesGroovies.classList.remove("active");
    var rmWeatherDashboard = document.getElementById("weatherDashboard");
    rmWeatherDashboard.classList.remove("active");
    var rmWorkDayPlanner = document.getElementById("workDayPlanner");
    rmWorkDayPlanner.classList.remove("active");
    var rmCodeQuiz = document.getElementById("codeQuiz");
    rmCodeQuiz.classList.remove("active");
    var rmPasswordGenerator = document.getElementById("passwordGenerator");
    rmPasswordGenerator.classList.remove("active");
}


// let projects;