//Variables necessary
var letterContainer1 = [];//Letters
var letterContainer2 = [];//Letters joined =ing the word
var letterContainer3 = [];//Word with the break and reverse chronological order
var letterContainer4 = [];//Removed the commas
var letterContainer5 = [];//Points

//To make sure letter are all connected neighboring portion of the stretch goal

/*var count = 0
document.getElementByClassName(question).click(function() {
count++;
if(count == 1) {
  getLetter();
    }else if(count >= 2){
      for (var i = 0; i < question.length; i++) {

          }
    }
}); incomplete*/

//A function to get the letter and puts the possible letters together as a word
function getLetter () {
  var word = event.target.innerHTML;//The target event property returns the element that triggered the event.
  letterContainer1.push(word);//The push() method adds new items to the end of an array, and returns the new length.
  letterContainer2 = letterContainer1.join("");//joins the letters from the array together
  document.getElementById("word").innerHTML = letterContainer2;//grabs the letter from the square
}

//Change button color to orange when clicked
var question = document.querySelectorAll('.btn');//selects all of the .btn classes (nodes)s

function myColor(){
  this.style.backgroundColor = '#FEA221';//changes the background color of the button to orange
  this.disabled = true;//disables the button once clicked
}

for (var i = 0; i < question.length; i++){
  question[i].addEventListener('click', myColor);
}

//A function to clear the board
function clearWord() {
  document.getElementById("word").textContent = "Word";
  letterContainer1 = [];//Letter
  letterContainer2 = [];//Letter joined --- both letterContainers are included so that the single letter and the joined array can be erased
  for (var i = 0; i < question.length; i++){
      question[i].style.backgroundColor = '#FCB7C3';//background color of the board
      question[i].disabled = false;//buttons are no longer disabled once the letters are cleared from the board
  }
}

//A function to submit the word and receive points
function submitWord() {
  var letterContainer6 = letterContainer2.toLowerCase();//changing letters to lowercase so that the words will be recognized byt hte dictonary
if (isBasicWord(letterContainer6) == true){//isBasicWord is calling the dictonary into action. The dictionary is a script in the HTML
  if (letterContainer2.length >= 3) {//of word is greater than or equal to 3
  letterContainer3.unshift(letterContainer2, "<br>");//Word with the break and reverse chronological order
  letterContainer4 = letterContainer3.join("");//Removed the commas
  letterContainer5.push(letterContainer2.length);
  document.getElementById("list").innerHTML = letterContainer4;
  document.getElementById("points").innerHTML = letterContainer5.reduce(add, 0) * 9;
  clearWord();//once submit is pressed the board will be cleared
}
  else {
  alert("Too Small!");//if th word is less than 3 letters an alert will say it is too small
  clearWord();//once the alert is exited the board will be cleared
  }
} else {
  alert("Not a valid word!");//if the word in not recognized byt he dictonary and alert will appear
  clearWord();//once the alert is exited the board will be cleared
}
}

function add(a, b) {
    return a + b;
}

//A function to reset the board and scramble letters
function resetWord() {
  clearWord();//Clears the board
  letterContainer3 = [];//Word with the break and reverse chronological order
  letterContainer4 = [];//Removed the commas
  letterContainer5 = [];//Points
  document.getElementById("list").innerHTML = "";//Word list will be empty
  document.getElementById("points").innerHTML = "0";//Points will default to zero
  for (var i = 0; i < question.length; i++) {
    if ( i%5 === 0 ) {
    question[i].innerHTML = randomVowel();//square will be a vowel
  }
    else {
    question[i].innerHTML = randomLetter();//If it is not a square that requires a vowel, it will be any letter in the alphabet
  }
}
timerStart()//time will start over once board is reset --- Still needs to work properly -- currently resets but old time is still going
}
//A Function to generate random letters when the board is reset
function randomLetter() {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  return getRandomLetter;//returns a random letter in each square each tim the board is reset
}
//A function to generate a random vowel
function randomVowel() {
  var vowels = "AEIOU";
  var getRandomVowel = vowels[Math.floor(Math.random() * vowels.length)];
  return getRandomVowel;//returns a random vowels in each square each tim the board is reset
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
            clearInterval(handle);//clears the interval
            handle = 0;//interval will be cleared once the timer reaches zero
        for (var i = 0; i < question.length; i++) {
          question [i].disabled = true;//once timer reaches zero, no words can be submitted
          }
        }
    }, 1000);
}

//Displays the time starting at one minute
function timerStart() {
    var oneMinute = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
};

/*The below function is useful when you have multiple onload events
All you need to do is to create a new function and then stack
the functions you would like to load by function name*/
window.onload = function name() {
resetWord();//the boar is rest once the window loads
timerStart();//timer starts once window loads

};
