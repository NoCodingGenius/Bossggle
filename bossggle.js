//Variables necessary
var letterContainer1 = []; //Letters
var letterContainer2 = []; //Letters joined =ing the word
var letterContainer3 = []; //Word with the break and reverse chronological order
var letterContainer4 = []; //Removed the commas
var letterContainer5 = []; //Points

var question = document.querySelectorAll('.btn'); //selects all of the .btn classes (nodes)
var click = 0;
var buttonId = 0;

//To make sure letter are all connected neighboring portion of the stretch goal
for (var i = 0; i < question.length; i++) {
  question[i].addEventListener('click', function clicks() {
    ++click;
    if (click === 1) {
      getLetter(question[i]);
      myColor(question[i]);
    } else if (click > 1 && buttonId == 'btn1') {
      document.querySelectorAll('#btn3, #btn4, #btn7, #btn8, #btn9, #btn10, #btn11, #btn12, #btn13, #btn14, #btn15, #btn16').disabled = true;
      getLetter(question[i]);
      myColor(question[i]);
    } else if (click > 1 && buttonId == 'btn2') {
      document.querySelectorAll('#btn4, #btn8, #btn9, #btn10, #btn11, #btn12, #btn13, #btn14, #btn15, #btn16').disabled = true;
      getLetter(question[i]);
      myColor(question[i]);
    } else if (click > 1 && buttonId == 'btn3') {
      document.querySelectorAll('#btn1, #btn5, #btn9, #btn10, #btn11, #btn12, #btn13, #btn14, #btn15, #btn16').disabled = true;
      getLetter(question[i]);
      myColor(question[i]);
    } else if (click > 1 && buttonId == 'btn4') {
      document.querySelectorAll('#btn1, #btn2, #btn5, #btn6, #btn9, #btn10, #btn11, #btn12, #btn13, #btn14, #btn15, #btn16').disabled = true;
      getLetter(question[i]);
      myColor(question[i]);
    } else if (click > 1 && buttonId == 'btn5') {
      document.querySelectorAll('#btn3, #btn4, #btn7, #btn8, #btn11, #btn12, #btn13, #btn14, #btn15, #btn16').disabled = true;
      getLetter(question[i]);
      myColor(question[i]);
    } else if (click > 1 && buttonId == 'btn6') {
      document.querySelectorAll('#btn4, #btn8, #btn12, #btn13, #btn14, #btn15, #btn16').disabled = true;
      getLetter(question[i]);
      myColor(question[i]);
    } else if (click > 1 && buttonId == 'btn7') {
      document.querySelectorAll('#btn1, #btn5, #btn9, #btn13, #btn14, #btn15, #btn16').disabled = true;
      getLetter(question[i]);
      myColor(question[i]);
    } else if (click > 1 && buttonId == 'btn8') {
      document.querySelectorAll('#btn1, #btn2, #btn5, #btn6, #btn9, #btn10, #btn13, #btn14, #btn15, #btn16').disabled = true;
      getLetter(question[i]);
      myColor(question[i]);
    } else if (click > 1 && buttonId == 'btn9') {
      document.querySelectorAll('#btn1, #btn2, #btn3, #btn4, #btn7, #btn8, #btn11, #btn12, #btn15, #btn16').disabled = true;
      getLetter(question[i]);
      myColor(question[i]);
    } else if (click > 1 && buttonId == 'btn10') {
      document.querySelectorAll('#btn1, #btn2, #btn3, #btn4, #btn8, #btn12, #btn16').disabled = true;
      getLetter(question[i]);
      myColor(question[i]);
    } else if (click > 1 && buttonId == 'btn11') {
      document.querySelectorAll('#btn1, #btn2, #btn3, #btn4, #btn5, #btn9, #btn13').disabled = true;
      getLetter(question[i]);
      myColor(question[i]);
    } else if (click > 1 && buttonId == 'btn12') {
      document.querySelectorAll('#btn1, #btn2, #btn3, #btn4, #btn5, #btn6, #btn9, #btn10, #btn13, #btn14').disabled = true;
      getLetter(question[i]);
      myColor(question[i]);
    } else if (click > 1 && buttonId == 'btn13') {
      document.querySelectorAll('#btn1, #btn2, #btn3, #btn4, #btn5, #btn6, #btn7, #btn8, #btn11, #btn12, #btn15, #btn16').disabled = true;
      getLetter(question[i]);
      myColor(question[i]);
    } else if (click > 1 && buttonId == 'btn14') {
      document.querySelectorAll('#btn1, #btn2, #btn3, #btn4, #btn5, #btn6, #btn7, #btn8, #btn12, #btn16').disabled = true;
      getLetter(question[i]);
      myColor(question[i]);
    } else if (click > 1 && buttonId == 'btn15') {
      document.querySelectorAll('#btn1, #btn2, #btn3, #btn4, #btn5, #btn6, #btn7, #btn8, #btn9, #btn13').disabled = true;
      getLetter(question[i]);
      myColor(question[i]);
    } else if (click > 1 && buttonId == 'btn16') {
      document.querySelectorAll('#btn1, #btn2, #btn3, #btn4, #btn5, #btn6, #btn7, #btn8, #btn9, #btn10, #btn13, #btn14').disabled = true;
      getLetter(question[i]);
      myColor(question[i]);
    }
  });
}

function buttonIdGet(button) {
  buttonId = event.target.id;
}

//A function to get the letter and puts the possible letters together as a word
function getLetter() {
  var word = event.target.innerHTML; //The target event property returns the element that triggered the event.
  letterContainer1.push(word); //The push() method adds new items to the end of an array, and returns the new length.
  letterContainer2 = letterContainer1.join(""); //joins the letters from the array together
  document.getElementById("word").innerHTML = letterContainer2; //grabs the letter from the square
}

//Change button color to orange when clicked
function myColor() {
  event.target.style.backgroundColor = '#FEA221'; //background color will be orange
  event.target.disabled = true; //disables the button once clicked
}

//A function to clear the board
function clearWord() {
  document.getElementById("word").textContent = "Word"; //When the board is cleared then the default word on the board will be "word"
  letterContainer1 = []; //Letter
  letterContainer2 = []; //Letter joined --- both letterContainers1 and letterContainer2 are included so that the single letter and the joined array can be erased
  click = 0;
  for (var i = 0; i < question.length; i++) { //sets a variable before the loop starts (var i = 0), defines the condition for the loop to run (i must be less than lenth of var question), increases a value (i++) each time the code block in the loop has been executed)
    question[i].style.backgroundColor = '#FCB7C3'; //background color of the board
    question[i].disabled = false; //buttons are no longer disabled once the letters are cleared from the board
  }
}

//A function to submit the word and receive points
function submitWord() {
  var letterContainer6 = letterContainer2.toLowerCase(); //changing letters to lowercase so that the words will be recognized byt hte dictonary
  if (isBasicWord(letterContainer6) == true) { //isBasicWord is calling the dictonary into action. The dictionary is a script in the HTML
    if (letterContainer2.length >= 3) { //of word is greater than or equal to 3
      letterContainer3.unshift(letterContainer2, "<br>"); //Word with the break and reverse chronological order
      letterContainer4 = letterContainer3.join(""); //Removed the commas
      letterContainer5.push(letterContainer2.length); //points are totaled based on the length of the word and the new amount of points are added to the new total
      document.getElementById("list").innerHTML = letterContainer4; //Places the word on the word list without the comma
      document.getElementById("points").innerHTML = letterContainer5.reduce(add, 0) * 9; //places the points in the points section ad multiplies by 9 (amount of the points) -- makes sure the array is reduced to the actual length of the word and not the entire length including <br>
      clearWord(); //once submit is pressed the board will be cleared
    } else {
      alert("Word needs to be at least 3 letters!"); //if th word is less than 3 letters an alert will say it is too small
      clearWord(); //once the alert is exited the board will be cleared
    }
  } else {
    alert("Not a valid word!"); //if the word in not recognized byt he dictonary and alert will appear
    clearWord(); //once the alert is exited the board will be cleared
  }
}

function add(a, b) { //combines both if statements in a function
  return a + b; //results will make sure both if statements are considered for length and word validation
}

//A function to reset the board and scramble letters
function resetWord() {
  clearWord(); //Clears the board
  letterContainer3 = []; //Word with the break and reverse chronological order
  letterContainer4 = []; //Removed the commas
  letterContainer5 = []; //Points
  document.getElementById("list").innerHTML = ""; //Word list will be empty
  document.getElementById("points").innerHTML = "0"; //Points will default to zero
  for (var i = 0; i < question.length; i++) { //sets a variable before the loop starts (var i = 0), defines the condition for the loop to run (i must be less than lenth of var question), increases a value (i++) each time the code block in the loop has been executed)
    if (i % 5 === 0) { //every 5th square after the initial variable will be a vowel
      question[i].innerHTML = randomVowel(); //if the square meets the condition above then the square will be a vowel
    } else {
      question[i].innerHTML = randomLetter(); //If the square does not meet the condition above then it will be any letter in the alphabet
    }
  }
  timerStart() //time will start over once board is reset --- Still needs to work properly -- currently resets but old time is still going
}
//A Function to generate random letters when the board is reset
function randomLetter() {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //List of random letter
  var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]; //will pull from a list of random letters throughout the length of the string of the alphabet
  return getRandomLetter; //returns a random letter in each square each time the board is reset
}
//A function to generate a random vowel
function randomVowel() {
  var vowels = "AEIOU"; //List of random vowels
  var getRandomVowel = vowels[Math.floor(Math.random() * vowels.length)]; //will pull from a list of random letters throughout the length of the string of the vowels
  return getRandomVowel; //returns a random vowels in each square each tim the board is reset
}

//A function to start the timer
var handle = null; //handle is known to exist now but it has no type or value
function startTimer(duration, display) {
  var timer = duration,//wen beautified in atom this line of code was split between line 111 and 112
    minutes, seconds; //timer will have a duration that will consist of minutes and seconds only for lines 111 and 112
  clearInterval(handle); //Each time the timer is rest the interval will start over completely without continuing the old time
  handle = setInterval(function() { //starting from fresh the new time begins
    minutes = parseInt(timer / 60, 10); //parseInt(string, radix); Specify 10 for the decimal numeral system commonly used by humans. Always specify this parameter
    seconds = parseInt(timer % 60, 10); //The modular operator (%) returns the division remainder.
    //parseInt() used to make it a whole number
    minutes = minutes < 10 ? "0" + minutes : minutes; //once the time gets to be less than 10 minutes it will place a zero in from of the number i.e. 09:00
    seconds = seconds < 10 ? "0" + seconds : seconds; ///once the time gets to be less than 10 seconds it will place a zero in from of the number i.e. 09:09

    display.textContent = minutes + ":" + seconds; //the screen will display minutes plus : plus seconds i.e 10:00

    if (--timer < 0) { //decreases the time to zero
      timer = duration; //total time
      clearInterval(handle); //clears the interval
      handle = 0; //interval will be cleared once the timer reaches zero
      for (var i = 0; i < question.length; i++) { //sets a variable before the loop starts (var i = 0), defines the condition for the loop to run (i must be less than lenth of var question), increases a value (i++) each time the code block in the loop has been executed)
        question[i].disabled = true; //once timer reaches zero, no words can be submitted
      }
    }
  }, 1000);
}

//Displays the time starting at one minute (in this case)
function timerStart() {
  var oneMinute = 60 * 1, //the amount of time we would like to be on the time
    display = document.querySelector('#time'); //time will display within the span of the div in the HTML code
  startTimer(oneMinute, display); //time will start at one nimute and will display in the area selected by id in the HTML
};

/*The below function is useful when you have multiple onload events
All you need to do is to create a new function and then stack
the functions you would like to load by function name*/
window.onload = function name() {
  resetWord(); //the boar is rest once the window loads
  timerStart(); //timer starts once window loads

};
