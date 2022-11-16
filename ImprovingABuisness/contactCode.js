/*Code for surveys*/
let fname = "";
let lname = "";

let nameFinished = 0;
let practiceFinished = 0;
let playingFinished = 0;
let effortScore = 0;
let enjoymentScore = 0;

function saveNames() {
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    nameFinished = 1;
}

function practiceScore() {
    let dailyPractice = document.getElementById("daily").checked;
    let weeklyPractice = document.getElementById("weekly").checked;
    let rarePractice = document.getElementById("rarely").checked;

    if (dailyPractice) {
        effortScore = 3;
    } else if (weeklyPractice) {
        effortScore = 2;
    } else if (rarePractice) {
        effortScore = 1;
    }
    practiceFinished = 1;
}


function playingScore() {
    let rating = prompt("On a scale from 1 to 10, how much do you enjoy playing piano?");
    enjoymentScore = parseInt(rating);
    playingFinished = 1;
}

function finalScore() {
    let responseText = document.getElementById('response');
    /*checks to see if all other surveys wre completed*/
    let surveysFinished = practiceFinished + nameFinished + playingFinished;
    if (surveysFinished == 3) {
        let endScore = effortScore * 10 + enjoymentScore;
        if (endScore == 40) {
            responseText.innerHTML = fname + " " + lname + ", we would love to have you in our class!";
        } else if (endScore >= 25) {
            responseText.innerHTML = fname + ", you would be a great fit for our class!";
        } else if (endScore >= 15) {
            responseText.innerHTML = "Sorry " + fname + ", you probably wouldn't be a great fit for our class.";
        } else {
            responseText.innerHTML = fname + " " + lname + ", do you even play piano?"
        }

    } else {
        responseText.innerHTML = "Please finish all surveys before checking your results.";
    }
}

