let fname = "";

//function for the greet
function greet() {
    // grab the greet paragraph
    let greetParagraph = document.getElementById("greet");

    //get values from the form 
    fname = document.getElementById("fname").value; 
    let age = document.getElementById("age").value;
    let lname = document.getElementById("lname").value; 

    // show the result!
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname + "!";
 
}

//function to trivia game 
function trivia() {
    let triviaAnswer = document.getElementById("trivia-answer");
    // get the checked values from form
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    //decide what to "print"
    if (chocolateSelected){
        triviaAnswer.innerHTML = fname + ", you are wrong. Sweet tooth, eh?";
    } else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Rotten tuna, yuck!"
    } else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are correct!"
    }
}

//function to lie game 
function lie() {
    let lieAnswer = document.getElementById("lie-answer");
    // get the checked values from form
    let birthdaySelected = document.getElementById("birthday").checked;
    let nameSelected = document.getElementById("name").checked;
    let movieSelected = document.getElementById("movie").checked;

    //decide what to "print"
    if (birthdaySelected){
        lieAnswer.innerHTML = fname + ", you are wrong. We are both Sags!";
    } else if (movieSelected) {
        lieAnswer.innerHTML = fname + ", you are wrong. Look up Ocean 11!"
    } else if (nameSelected) {
        lieAnswer.innerHTML = fname + ", you are correct! My real name is just Tess!"
    }
}