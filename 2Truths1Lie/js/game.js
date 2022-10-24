let fname = "";
let lname = "";
let age = "";

//function for the introduction

function greet() {
    //grab greet paragraph
    let greetParagraph = document.getElementById("greet");

    //get values from the form
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    age = document.getElementById("age").value;

    //sput values in greet paragraph
    greetParagraph.innerHTML = "Hello " + fname + "! I hope you are doing well today!"
}

//function for te trivia

function trivia() {
    //grab result paragraph
    let triviaAnswer = document.getElementById("trivia-answer");
    //get checked values
    let marchSelected = document.getElementById("march").checked;
    let tuesdaySelected = document.getElementById("tuesday").checked;
    let febSelected = document.getElementById("february").checked;

    //decides what to print
    if (marchSelected) {
        triviaAnswer.innerHTML = "Sorry " + fname + ", you are wrong.";
    } else if (tuesdaySelected) {
        triviaAnswer.innerHTML = fname + ", you're " + age + ". Are you joking?.";
    } else if (febSelected) {
        triviaAnswer.innerHTML = "Great job " + fname + "!";
    }
}

//function for 2 truths 1 lie

function truths() {
    //grab answer paragraph
    let answer = document.getElementById("truths-answer");
    //get checked values
    let bonesSelected = document.getElementById("bones").checked;
    let langSelected = document.getElementById("language").checked;
    let zipSelected = document.getElementById("zip").checked;

    //prints answers
    if (bonesSelected) {
        answer.innerHTML = "Nope " + fname + " , somehow I haven't broken a bone yet";
    } else if (langSelected) {
        answer.innerHTML = "Sorry " + fname + ", my first language was Farsi (Iranian), not English.";
    } else if (zipSelected) {
        answer.innerHTML = fname + " " + lname + ", you are correct! I love ziplining!";
    }

}