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


