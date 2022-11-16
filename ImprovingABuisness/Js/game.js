


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

