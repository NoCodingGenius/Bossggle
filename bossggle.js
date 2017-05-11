//Variables necessary
var letterContainer1 = [];
var letterContainer2 = [];
var letterContainer3 = [];
var letterContainer4 = [];
var letterContainer5 = [];

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
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);

window.onload = resetWord();

// if (i = i + 1 || i = i + 3|| i = i + 4|| i = i + 5|| i = i - 1|| i = i - 3|| i = i - 4 || i = i - 5)
