


/*This Javascript creates the page numbers for the slideshows. It is all my own code 
and it took me a very long time to figure out how to add a delay to the functions using 
the seTimeout function. I added a delay so that you can't change the page numbers faster 
than the Bootstrap carousel could change slides. Yes, I am aware that I could've manually 
typed the page numbers, but I chose to callenge myself instead :). */

let slideNumber = 1;

let maxSlides = 10;

let timeCounter = 1;

function delayTimer() {
    timeCounter = 1;
}

function plusSlideNum() {
    let slideNumberText = document.getElementById('number');
    if (timeCounter == 1) {
        if (slideNumber < maxSlides) {
            slideNumber += 1;
        } else if (slideNumber == maxSlides) {
            slideNumber = 1;
        }
        slideNumberText.innerHTML = slideNumber + '/10';
        timeCounter = 0;
        setTimeout(delayTimer, 600);
    }
}

function minusSlideNum() {
    let slideNumberText = document.getElementById('number');
    if (timeCounter == 1) {
        if (slideNumber > 1) {
            slideNumber -= 1;
        } else if (slideNumber == 1) {
            slideNumber = 10;
        }
        slideNumberText.innerHTML = slideNumber + '/10';
        timeCounter = 0;
        setTimeout(delayTimer, 600);
    }
}


/*Code for surveys*/

let fname = "";
let lname = "";

let surveysFinished = 0;

let practiceScore = 0;

let enjoymentScore = 0;

function saveNames() {
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    surveysFinished += 1;
}

function practiceScore() {
    let dailyPractice = document.getElementById("daily").checked;
    let weeklyPractice = document.getElementById("weekly").checked;
    let rarePractice = document.getElementById("rarely").checked;

    if (dailyPractice) {
        practiceScore = 3;
    } else if (weeklyPractice) {
        practiceScore = 2;
    } else if (rarePractice) {
        practiceScore = 1;
    }
    surveysFinished += 1;
}


function playingScore() {
    let rating = prompt("On a scale from 1 to 10, how much do you enjoy playing piano?")
    enjoymentScore = parseInt(rating);
    surveysFinished += 1;
}

function finalScore() {
    let responseText = document.getElementById('response');
    if (surveysFinished == 3) {
        responseText.innerHTML = "Please finish all surveys before checking your results.";
    } else {
        responseText.innerHTML = "Please finish all surveys before checking your results.";
    }
}
