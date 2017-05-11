//Variables necessary
var letterContainer1 = [];//Letters
var letterContainer2 = [];//Letters joined =ing the word
var letterContainer3 = [];//Word with the break and reverse chronological order
var letterContainer4 = [];//Removed the commas
var letterContainer5 = [];//Points

//A function to get the ID and puts the possible letters in the ID
function getLetter () {
  var word = event.target.innerHTML;
  letterContainer1.push(word);
  letterContainer2 = letterContainer1.join("");
  document.getElementById("word").innerHTML = letterContainer2;
}

//Change button color to orange when clicked
var question = document.querySelectorAll('.btn');

function myColor(){
  this.style.backgroundColor = '#FEA221';
  this.disabled = true;
}

for (var i = 0; i < question.length; i++){
  question[i].addEventListener('click', myColor);
}

//A function to clear the board
function clearWord() {
  document.getElementById("word").textContent = "Word";
  letterContainer1 = [];
  letterContainer2 = [];
  for (var i = 0; i < question.length; i++){
      question[i].style.backgroundColor = '#FCB7C3';
      question[i].disabled = false;
  }
}

//A function to submit the word and receive points
function submitWord() {
  var letterContainer6 = letterContainer2.toLowerCase();//changing letters to lowercase
if (isBasicWord(letterContainer6) == true){
  if (letterContainer2.length >= 3) {
  letterContainer3.unshift(letterContainer2, "<br>");
  letterContainer4 = letterContainer3.join("");
  letterContainer5.push(letterContainer2.length);
  document.getElementById("list").innerHTML = letterContainer4;
  document.getElementById("points").innerHTML = letterContainer5.reduce(add, 0) * 9;
  clearWord();
}
  else {
  alert("Too Small!");
  clearWord();
  }
} else {
  alert("Not a valid word!");
  clearWord();
}
}

function add(a, b) {
    return a + b;
}

//A function to reset the word and scramble letters
function resetWord() {
  clearWord();
  letterContainer3 = [];
  letterContainer4 = [];
  letterContainer5 = [];
  document.getElementById("list").innerHTML = "";
  document.getElementById("points").innerHTML = "0";
  for (var i = 0; i < question.length; i++) {
    if ( i%5 === 0 ) {
    question[i].innerHTML = randomVowel();
  }
    else {
    question[i].innerHTML = randomLetter();
  }
}
timerStart()
}
//A Function to generate random letters when the board is reset
function randomLetter() {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  return getRandomLetter;
}
//A function to generate a random vowel
function randomVowel() {
  var vowels = "AEIOU";
  var getRandomVowel = vowels[Math.floor(Math.random() * vowels.length)];
  return getRandomVowel;
}

//A function to start the timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var handle = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            clearInterval(handle);
            handle = 0;
        for (var i = 0; i < question.length; i++) {
          question [i].disabled = true;
          }
        }
    }, 1000);
}

function timerStart() {
    var oneMinute = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
};

//The below function is useful when you have multiple onload events
//All you need to do is to create a new function and then stack
//the functions you would like to load by function name
window.onload = function name() {
resetWord();
timerStart();

};

// if (i = i + 1 || i = i + 3|| i = i + 4|| i = i + 5|| i = i - 1|| i = i - 3|| i = i - 4 || i = i - 5)
